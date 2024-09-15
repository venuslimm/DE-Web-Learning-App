import { Injectable } from '@nestjs/common';
import { promisify } from 'util';
import { exec as execCallback, spawn } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class AppService {
  exec = promisify(execCallback);

  async executeScript(scriptPath: string, pythonExec: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const process = spawn(pythonExec, [scriptPath]);

      let output = '';
      let errorOutput = '';

      process.stdout.on('data', (data) => {
        output += data.toString();
      });

      process.stderr.on('data', (data) => {
        console.error('Error:', data.toString());
        errorOutput += data.toString();
      });

      process.on('close', (code) => {
        if (code === 0) {
          resolve(output);
        } else {
          reject(
            new Error(
              `Script execution failed with code ${code}: ${errorOutput}`,
            ),
          );
        }
      });
    });
  }

  async execute(script: string): Promise<any> {
    const timestamp = Date.now();
    const scriptPath = path.join(__dirname, `temp_script_${timestamp}.py`);

    const pythonExec =
      process.platform === 'win32'
        ? path.join(__dirname, '..', 'myenv', 'Scripts', 'python')
        : 'python3';

    // Write the Python script to a file
    fs.writeFileSync(scriptPath, script);

    try {
      const result = await this.executeScript(scriptPath, pythonExec);
      console.log(result);
      return result;
    } catch (error) {
      console.error('Error executing script:', error);
      throw error;
    } finally {
      // Clean up: Remove the temporary script
      fs.unlinkSync(scriptPath);
    }
  }
}

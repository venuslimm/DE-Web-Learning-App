'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'
import { Button } from '@mui/material';
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import { getExecOutput } from '@/api/DataVizApi';
import Chatbot from '@/components/Chatbot';
import CourseNavBar from '@/components/CourseNavBar';
import { nav } from '../../../constants';

const DataVizPage = () => {
  const router = useRouter();

  // Line 17 for local, Line 18 for docker
  // const [code, setCode] = useState("# Import required libraries\nimport sys\nimport psycopg2\nimport plotly.express as px\nimport plotly.io as pio\nimport pandas as pd\n\ntry:\n  sys.stdout.reconfigure(encoding='utf-8')\n\n  # Database connection parameters\n  db_params = {\n    'dbname': 'db',\n    'user': 'postgres',\n    'password': 'password',\n    'host': 'localhost',\n    'port': '5430'\n  }\n\n  # Initialize an empty DataFrame\n  df = pd.DataFrame()\n\n  try:\n    # Establish a connection to the PostgreSQL database\n    connection = psycopg2.connect(**db_params)\n    cursor = connection.cursor()\n\n    # Get all the data that you have loaded in the ETL step\n    cursor.execute(\"SELECT * FROM healthcare;\")\n\n    # Fetch the result of the query\n    data = cursor.fetchall()\n\n    # Get column names\n    colnames = [desc[0] for desc in cursor.description]\n\n    # Store data in a DataFrame\n    df = pd.DataFrame(data, columns=colnames)\n\n    # Close the cursor and connection\n    cursor.close()\n    connection.close()\n  except (Exception, psycopg2.DatabaseError) as error:\n    # This will be printed if there is error connecting to the database\n    print(f\"Error connecting to PostgreSQL database: {error}\")\n\n  # Get only the singapore data\n  # Technically, all the data in this df is for Singapore\n  df_sg = df.query('country==\"singapore\"')\n\n  # Group by 'disease' and sum the 'no_of_cases'\n  df_grouped = df_sg.groupby('disease', as_index=False)['no_of_cases'].sum()\n\n  # Sort the aggregated data by 'no_of_cases' in descending order\n  df_sorted = df_grouped.sort_values(by='no_of_cases', ascending=False)\n\n  # Get the top 10 diseases\n  df_top10 = df_sorted.head(10)\n\n  # Create the bar plot\n  bar_fig = px.bar(df_top10, x=\"disease\", y=\"no_of_cases\", title=\"Top 10 Diseases in Singapore\")\n\n  # Print the html for this bar plot to display it on the right side of this page\n  bar_plot_html = pio.to_html(bar_fig, full_html=True, include_plotlyjs=True)\n  print(bar_plot_html)\n\nexcept Exception as error:\n  # To catch and print any error\n  print(f\"Error: {error}\")");
  const [code, setCode] = useState("# Import required libraries\nimport sys\nimport psycopg2\nimport plotly.express as px\nimport plotly.io as pio\nimport pandas as pd\n\ntry:\n  sys.stdout.reconfigure(encoding='utf-8')\n\n  # Database connection parameters\n  db_params = {\n    'dbname': 'db',\n    'user': 'postgres',\n    'password': 'password',\n    'host': 'db',\n    'port': '5432'\n  }\n\n  # Initialize an empty DataFrame\n  df = pd.DataFrame()\n\n  try:\n    # Establish a connection to the PostgreSQL database\n    connection = psycopg2.connect(**db_params)\n    cursor = connection.cursor()\n\n    # Get all the data that you have loaded in the ETL step\n    cursor.execute(\"SELECT * FROM healthcare;\")\n\n    # Fetch the result of the query\n    data = cursor.fetchall()\n\n    # Get column names\n    colnames = [desc[0] for desc in cursor.description]\n\n    # Store data in a DataFrame\n    df = pd.DataFrame(data, columns=colnames)\n\n    # Close the cursor and connection\n    cursor.close()\n    connection.close()\n  except (Exception, psycopg2.DatabaseError) as error:\n    # This will be printed if there is error connecting to the database\n    print(f\"Error connecting to PostgreSQL database: {error}\")\n\n  # Get only the singapore data\n  # Technically, all the data in this df is for Singapore\n  df_sg = df.query('country==\"singapore\"')\n\n  # Group by 'disease' and sum the 'no_of_cases'\n  df_grouped = df_sg.groupby('disease', as_index=False)['no_of_cases'].sum()\n\n  # Sort the aggregated data by 'no_of_cases' in descending order\n  df_sorted = df_grouped.sort_values(by='no_of_cases', ascending=False)\n\n  # Get the top 10 diseases\n  df_top10 = df_sorted.head(10)\n\n  # Create the bar plot\n  bar_fig = px.bar(df_top10, x=\"disease\", y=\"no_of_cases\", title=\"Top 10 Diseases in Singapore\")\n\n  # Print the html for this bar plot to display it on the right side of this page\n  bar_plot_html = pio.to_html(bar_fig, full_html=True, include_plotlyjs=True)\n  print(bar_plot_html)\n\nexcept Exception as error:\n  # To catch and print any error\n  print(f\"Error: {error}\")");
  const [html, setHtml] = useState("<p>Output will be displayed here after you execute your code.</p>");
  const [content, setContent] = useState(html);
  
  useEffect(() => {
    // Update the content state when the html prop changes
    setContent(html);
  }, [html]);

  const execCode = async () => {
    console.log(code);
    const output = await getExecOutput(code);
    console.log(output)
    if (output.length === 0) {
      setHtml('<p style="color: red;">Your code execution failed. Check your code again.</p>');
    } else {
      setHtml(output);
    }
  }
  return (
    <div className='flex flex-col'>
      <CourseNavBar
        navList={nav}
        />
      <div className='flex flex-row'>
        <div className='flex flex-col w-[50%] mr-1'>
          <div className='flex justify-center bg-[#f5f5f5]'>
            <Button className='w-[50px] py-0 pr-5 ml-auto' onClick={execCode}>Execute</Button>
          </div>
          <CodeMirror
            value={code}
            extensions={[python()]}
            onChange={(update) => {
              console.log(update);
              setCode(update);
            }}
          />
        </div>
        <div className='flex flex-col w-[50%] ml-1'>
          <Chatbot />
          <iframe className='border' srcDoc={content} width="100%" height="500pt"></iframe>
        </div>
      </div>
    </div>
    
  );
};

export default DataVizPage;

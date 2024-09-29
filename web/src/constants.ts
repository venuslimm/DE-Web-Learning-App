import { StringStringMap } from './types';

// TODO: Change to get from db
// All comes with chatbot
export const nav = {
  'Introduction': '/intro-to-etl/introduction',   // pdf doc
  'ETL': '/intro-to-etl/etl',                     // mageai + pdf doc
  // 'EDA': '/intro-to-etl/eda',                     // code + pdf doc
  'Data Visualisation': '/intro-to-etl/data-viz', // code + pdf doc
  'Summary': '/intro-to-etl/summary',             // pdf doc
};

export const introToEtlDocs: StringStringMap = {
  'Introduction': '/resources/intro_to_etl/introduction.pdf',
  'Batch Guide': '/resources/intro_to_etl/batch_guide.pdf',
  'Stream Guide': '/resources/intro_to_etl/streaming_guide.pdf',
  // 'EDA': '/resources/intro_to_etl/eda.pdf',
  'Data Visualisation': '/resources/intro_to_etl/data_viz.pdf',
  'Summary': '/resources/intro_to_etl/summary.pdf',
  'Batch Dataset': '/resources/intro_to_etl/singapore.csv',
};

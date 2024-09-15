from kafka import KafkaProducer
from random import randint
import json
import time

topic = 'topic'
producer = KafkaProducer(
  bootstrap_servers='kafka:9093',
)

def publish_message():
  print("Starting to publish messages...")
  disease = [
    'Acute Viral hepatitis B',
    'Acute Viral hepatitis C',
    'Avian Influenza',
    'Campylobacterenterosis',
    'Chikungunya Fever',
    'Cholera',
    'Dengue Fever',
    'Dengue Haemorrhagic Fever',
    'Diphtheria',
    'Encephalitis',
    'Haemophilus influenzae type b',
    'Hand, Foot Mouth Disease',
    'Legionellosis',
    'Malaria',
    'Measles',
    'Melioidosis',
    'Meningococcal Infection',
    'Mumps',
    'Nipah virus infection',
    'Paratyphoid',
    'Pertussis',
    'Plague',
    'Pneumococcal Disease (invasive)',
    'Poliomyelitis',
    'Rubella',
    'Salmonellosis(non-enteric fevers)',
    'SARS',
    'Typhoid',
    'Viral Hepatitis A',
    'Viral Hepatitis E',
    'Yellow Fever',
  ]
  
  while True:
    try:
      # Similar to the data in Singapore dataset (standard dataset)
      year = randint(2012, 2022)
      week = randint(1, 52)
      disease_index = randint(0, len(disease) - 1)
      no_of_cases = randint(0, 1000)
      data = {
        'epi_week': f'{year}-W{week:02}',
        'disease': disease[disease_index],
        'no._of_cases': no_of_cases,
      }
      
      producer.send(topic, value=json.dumps(data).encode('utf-8'))
      print(f"Published: {data}")
    except Exception as e:
      print(f"Error publishing message: {e}")
      
    # Publish a message every 7 seconds
    time.sleep(7)

if __name__ == '__main__':
  publish_message()
  
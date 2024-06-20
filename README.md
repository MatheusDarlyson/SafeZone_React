# Squad 06 - SafeZone (TADS026)
- Matheus Crasto
- Ozias Nascimento
- Matheus Darlyson
- Jorge Luiz
- André Nascimento

# Aplicação React (2ª Entrega)

# Explanação geral : O App SafeZone é voltado para segurança do trabalho, visando atuar como mediador entre colaborador e gestão com foco na prevenção de acidentes de trabalho.
- Usuário se cadastra e realiza login;
- Usuário identifica pontos de risco e os cadastra na plataforma para que os gestores tenham acessos e possam tomar decisões mais rápidas e assertivas, visando reduzir os acidentes no trabalho.
  
# Compatibilidade
- A aplicação foi construída tendo como base o React Native. 
- Recurso de Hardware usado => Câmera e GPS
- CRUD via API MongoDb (rotas testadas via Postman)
- foram utilizadas as seguintes "dependências":
-   "dependencies": {
    "@react-native-async-storage/async-storage": "^1.23.1",
    "axios": "^1.7.2",
    "cors": "^2.8.5",
    "expo": "~51.0.9",
    "expo-camera": "~15.0.11",
    "expo-location": "^17.0.1",
    "expo-status-bar": "~1.12.1",
    "express": "^4.19.2",
    "formik": "^2.4.6",
    "mongoose": "^8.4.3",
    "react": "^18.2.0",
    "react-dom": "^17.0.2",
    "react-native": "0.74.1",
    "react-native-async-storage": "^0.0.1",
    "react-native-image-picker": "^7.1.2",
    "react-native-maps": "^1.15.6",
    "react-navigation": "^5.0.0",
    "react-router-dom": "^6.23.1",
    "yup": "^1.4.0"}
    
# Obs:
- Durante a implântação da aplicação via Expo, após diversos testes, não se conseguiu fazer contato com o banco de dados (que está em localhost no PC), porém as rotas foram criadas e testadas através do Postman, com perfeito funcionamento;
- A tela de "Listagem de Riscos" também sofreu com a falta de conexão com o banco de dados, pois mesmo tentando salvar os registros em async storage, eles não apareciam na tela específica;
- Para o uso de câmera foi pego como base um código que está disponível na documentação oficial do expo : https://docs.expo.dev/versions/latest/sdk/camera/#ratio;
  
    
    

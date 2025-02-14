import admin from 'firebase-admin';

export async function authenticateToken(request, response, next){
    const jwt = request.headers.authorization;
  if (!jwt){
    response.status(401).json({message: "usuario nao autorizado "});
    return;
  }


  let decodedIdToken = "";
  try {
  let decodedIdToken = await admin.auth().verifyIdToken(jwt, true);
  }catch (e){
    response.status(401).json({message: "usuario nao autorizado "});
    return;
  }
  request .user = {
    uid: decodedIdToken.sub
  }

  next();
}
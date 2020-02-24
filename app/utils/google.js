import {
  google
} from 'googleapis';

const googleConfig = {
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  redirect: process.env.REDIRECT_URL
}

const createConnection = () => {
  return new google.auth.OAuth2(
    googleConfig.clientId,
    googleConfig.clientSecret,
    googleConfig.redirect
  )
}

const getConnectionUrl = (auth) => {
  return auth.getConnectionUrl({
    access_type: "offline",
    prompt: 'consent',
    scope: defaultScope
  });
}

const getGooglePlusApi = (auth) => {
  return google.plus({
    version: "v1",
    auth
  });
}

const urlGoogle = () => {
  const auth = createConnection();
  const url = getConnectionUrl(auth);
  return url
}

const getGoogleAccountFromCode = code => {
  const data = await auth.getToken(code);
  const token = data.tokens;
  const auth = createConnection();
  auth.setCredentials(tokens);
  const plus = getGooglePlusApi(auth);
  const me = await plus.people.get({
    userId: 'me'
  });
  const userGoogleId = me.data.id;
  const userGoogleEmail = me.data.emails && me.data.emails.length && me.data.emails[0].value;
  return {
    id: userGoogleId,
    email: userGoogleEmail,
    tokens,
  }
}
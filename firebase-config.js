// Firebaseコンソール →（歯車）プロジェクトの設定 →「マイアプリ」のウェブアプリの「SDKの設定と構成」の値を、下の4つに貼る。
// この値は公開されても大丈夫な設定です（パスワードではありません）。データを守るのは firestore.rules です。
window.FB_CONFIG = {
  apiKey: 'ここにapiKey',
  authDomain: 'ここにauthDomain',
  projectId: 'ここにprojectId',
  appId: 'ここにappId',
};

module.exports = async function authMacro(arc, cloudformation, stage) {
  
  const App = arc.app[0].toUpperCase().substring(0,1)+arc.app[0].substring(1);
  const Stage = stage.toUpperCase().substring(0,1)+stage.substring(1);

  cloudformation.Resources.Role.Properties.RoleName = 'Role'+App+Stage;

  return {...cloudformation};
}

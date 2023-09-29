const config = {
    app: {
        name: process.env.APPNAME || "Demo App",
        title: process.env.APPTITLE || "My Demo App",
        shortName: process.env.APPSHORTNAME || "My Demo",
        tagline: process.env.APPTAGLINE || "",
        baseDomain: process.env.APPBASEDOMAIN || "localhost",
        version: process.env.version || "v0.0.1"
    },
    developer: {
        name: "Ron Egli",
        github: "https://github.com/smugzombie"
    }
  };
  
  export default config;
import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { SalonShopList } from "./salonShop/SalonShopList";
import { SalonShopCreate } from "./salonShop/SalonShopCreate";
import { SalonShopEdit } from "./salonShop/SalonShopEdit";
import { SalonShopShow } from "./salonShop/SalonShopShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"SalonService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="SalonShop"
          list={SalonShopList}
          edit={SalonShopEdit}
          create={SalonShopCreate}
          show={SalonShopShow}
        />
      </Admin>
    </div>
  );
};

export default App;

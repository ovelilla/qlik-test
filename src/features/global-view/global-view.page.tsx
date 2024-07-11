// Vendors
import React from 'react';
import { QlikEmbed } from '@qlik/embed-react';

const GlobalViewPage = (): React.ReactElement => {
  const appId = 'dcfe13cf-c2c4-42ad-84fc-7510d179d154';
  const sheetId = '3337e68d-c051-4f25-95e7-f4830baea0e4';
  return (
    <div>
      <h1>Qlik Embed with React</h1>
      <QlikEmbed ui="analytics/selections" appId={appId} />
      {/* <QlikEmbed ui="classic/app" app={appId} sheet={sheetId} /> */}
      {/* <QlikEmbed ui="analytics/chart" appId={appId} objectId="SJQybjH" /> */}
    </div>
  );
};

export { GlobalViewPage };

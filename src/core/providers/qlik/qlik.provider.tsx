// Vendors
import { QlikEmbedConfig } from '@qlik/embed-react';
// Constants
import { HOST_CONFIG } from './constants/qlik.provider.constants';
// Types
import { QlikProviderPropsType } from './types/qlik.provider.props.type';

const QlikProvider = ({
  children,
}: QlikProviderPropsType): React.ReactElement<QlikProviderPropsType> => (
  <QlikEmbedConfig.Provider value={HOST_CONFIG}>{children}</QlikEmbedConfig.Provider>
);

export { QlikProvider };

import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { apolloServer } from '../../graphQl/apolloServer';

const handler = startServerAndCreateNextHandler(apolloServer);

export { handler as GET, handler as POST };
import * as React from 'react';
import Sheet from '@mui/joy/Sheet';
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import MessagesPane from './MessagesPane';
import ChatsPane from './ChatsPane';
// import { chats } from './data';
import _ from 'lodash';
import { WhatsappAPI } from '../../../service/WhatsappAPI';

const data = [
  {
    cfId: 'sel-ayi-1ru6h-31012025',
    name: 'PA',
    from: '918848538804',
    id: 'wamid.HBgMOTE4ODQ4NTM4ODA0FQIAEhggMEE3QTk2QjFBMzNGMUMzRjU2QThDNTczRDk0QTNDMzEA',
    timestamp: '1737998568',
    text: {
      body: 'Cool',
    },
    type: 'text',
  },
  {
    cfId: 'sel-ayi-1ru6h-31012025',
    name: 'You',
    from: '918848538804',
    id: 'wamid.HBgMOTE4ODQ4NTM4ODA0FQIAEhggMEE3QTk2QjFBMzNGMUMzRjU2QThDNTczRDk0QTNDMzEA',
    timestamp: '1737998564',
    text: {
      body: 'Will check',
    },
    type: 'text',
  },
  {
    cfId: 'din-ayi-1ru6h-31012025',
    name: 'PA',
    from: '919747976867',
    id: 'wamid.HBgMOTE4ODQ4NTM4ODA0FQIAEhggMEE3QTk2QjFBMzNGMUMzRjU2QThDNTczRDk0QTNDMzEA',
    timestamp: '1737998562',
    text: {
      body: 'Performing this',
    },
    type: 'text',
  },
];

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
        },
      },
    },
  },
});
export default function Chat() {
  const [chats, setChats] = React.useState([]);
  const [selectedChat, setSelectedChat] = React.useState();
  const [loading, setLoading] = React.useState(false )

  const fetchChats = async () => {
    try {
      const data = await WhatsappAPI.get();
      const d = _.groupBy(_.orderBy(data, 'timestamp', 'desc'), 'cfId');
      const c = Object.keys(d).map((v, i) => {
        return {
          ...d[v][0],
          messages: d[v],
        };
      });
      setChats(c);
      if (c.length > 0) {
        setSelectedChat(c[0]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    fetchChats();
  }, []);

  const syncChats = () => {
    fetchChats()
  }
  return (
    <CssVarsProvider disableTransitionOnChange theme={theme}>
      <CssBaseline />
      <Sheet
        sx={{
          flex: 1,
          width: '100%',
          mx: 'auto',
          pt: { xs: 'var(--Header-height)', md: 0 },
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'minmax(min-content, min(30%, 400px)) 1fr',
          },
        }}
      >
        <Sheet
          sx={{
            position: { xs: 'fixed', sm: 'sticky' },
            transform: {
              xs: 'translateX(calc(100% * (var(--MessagesPane-slideIn, 0) - 1)))',
              sm: 'none',
            },
            transition: 'transform 0.4s, width 0.4s',
            zIndex: 100,
            width: '100%',
            top: 52,
          }}
        >
          <ChatsPane
            chats={chats}
            selectedChatId={selectedChat?.cfId}
            setSelectedChat={setSelectedChat}
            syncChats={syncChats}
          />
        </Sheet>
        <MessagesPane chat={selectedChat} />
      </Sheet>
    </CssVarsProvider>
  );
}

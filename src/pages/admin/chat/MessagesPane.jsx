import * as React from 'react';
import Box from '@mui/joy/Box';
import Sheet from '@mui/joy/Sheet';
import Stack from '@mui/joy/Stack';
import AvatarWithStatus from './AvatarWithStatus';
import ChatBubble from './ChatBubble';
import MessageInput from './MessageInput';
import MessagesPaneHeader from './MessagesPaneHeader';

export default function MessagesPane(props) {
  const { chat } = props;
  const [chatMessages, setChatMessages] = React.useState();
  const [textAreaValue, setTextAreaValue] = React.useState('');

  React.useEffect(() => {
    if (chat?.messages) {
      setChatMessages(chat.messages);
    }
  }, [chat]);

  if (!chatMessages) {
    return (
      <Sheet
        sx={{
          height: { xs: 'calc(100dvh - var(--Header-height))', md: '100dvh' },
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'background.level1',
        }}
      >
        No Data
      </Sheet>
    );
  }

  return (
    <Sheet
      sx={{
        height: { xs: 'calc(100dvh - var(--Header-height))', md: '100dvh' },
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'background.level1',
      }}
    >
      <MessagesPaneHeader name={chat.name} from={chat.from} cfId={chat.cfId} />
      <Box
        sx={{
          display: 'flex',
          flex: 1,
          minHeight: 0,
          px: 2,
          py: 3,
          overflowY: 'scroll',
          flexDirection: 'column-reverse',
        }}
      >
        <Stack spacing={2} sx={{ justifyContent: 'flex-end' }}>
          {chatMessages.map((d, index) => {
            const isYou = d.name === 'You';
            return (
              <Stack
                key={index}
                direction="row"
                spacing={2}
                sx={{ flexDirection: isYou ? 'row-reverse' : 'row' }}
              >
                {d.name !== 'You' && (
                  <AvatarWithStatus
                    online={false}
                    name={d.name}
                    // src={message.avatar}
                  />
                )}
                <ChatBubble variant={isYou ? 'sent' : 'received'} {...d} />
              </Stack>
            );
          })}
        </Stack>
      </Box>
      <MessageInput
        textAreaValue={textAreaValue}
        setTextAreaValue={setTextAreaValue}
        onSubmit={() => {
          const newId = chatMessages.length + 1;
          const newIdString = newId.toString();
          setChatMessages([
            ...chatMessages,
            {
              id: newIdString,
              sender: 'You',
              content: textAreaValue,
              timestamp: 'Just now',
            },
          ]);
        }}
      />
    </Sheet>
  );
}

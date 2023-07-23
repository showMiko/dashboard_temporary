import { Box } from '@chakra-ui/react';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Box backgroundColor={{base:"white",md:"gray.100"}} width={"100vw"} minW={"fit-content"}>
      <Dashboard/>
    </Box>
  );
}

export default App;

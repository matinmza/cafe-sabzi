import { Box } from '@mui/system';
import Image from 'next/image';
import React, { useState } from 'react';
import MainLayout from 'src/layouts/main/MainLayout';

const HomePage = () => {
  const [state, setState] = useState('');
  return <Box>{/* <Image alt="x" width={70} height={70} src="/icons/logo.svg" /> */}</Box>;
};

HomePage.getLayout = (page: React.ReactElement) => <MainLayout> {page} </MainLayout>;

export default HomePage;

import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home } from 'pages/Home';
import { Services } from 'pages/Services';
import { Portfolio } from 'pages/Portfolio';
import { About } from 'pages/About';
import { NotFoundPage } from 'pages/NotFoundPage';
import { Layout } from './Layout/Layout';
import { LockWatcher } from 'pages/LockWatcher';
import { ImGuru } from 'pages/ImGuru';
import { LockMeNow } from 'pages/LockMeNow';
import { IpswDownloader } from 'pages/IpswDownloader';
import { RSRCManager } from 'pages/RSRCManager';
import { IGadgetManager } from 'pages/IGadgetManager';
import { IgaBall } from 'pages/IgaBall';
import { ExTVPlayer } from 'pages/ExTVPlayer';
import { FilterCombine } from 'pages/FilterCombine';
import { DeposiFastFilterViewt } from 'pages/DeposiFastFilterViewt';
import { PhotoTweaks } from 'pages/PhotoTweaks';
import { PhotoSnap } from 'pages/PhotoSnap';
import { Optimizer } from 'pages/Optimizer';




export const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/services' element={<Services />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<NotFoundPage />} />
            <Route path='/lockwatcher' element={<LockWatcher />} />
            <Route path='/imguru' element={<ImGuru />} />
            <Route path='/lockmenow' element={<LockMeNow />} />
            <Route path='/ipswdownloader' element={<IpswDownloader />} />
            <Route path='/rsrcmanager' element={<RSRCManager />} />
            <Route path='/igadgetmanager' element={<IGadgetManager />} />
            <Route path='/igaball' element={<IgaBall />} />
            <Route path='/extvplayer' element={<ExTVPlayer />} />
            <Route path='/filtercombine' element={<FilterCombine />} />
            <Route path='/deposifastfilterviewt' element={<DeposiFastFilterViewt />} />
            <Route path='/phototweaks' element={<PhotoTweaks />} />
            <Route path='/photosnap' element={<PhotoSnap />} />
            <Route path='/optimizer' element={<Optimizer />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

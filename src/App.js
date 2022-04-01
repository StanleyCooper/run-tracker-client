import React, { useEffect, useState } from 'react';
import RunLog from './components/RunLog';
import Header from './layout/Header';
import AddRunButton from './components/AddRunButton';

export default function App() {



  return (
    <main className="h-screen bg-gradient-to-b from-gray-500 to-gray-800">
      <Header />
      <RunLog />
      <div className="flex justify-end px-2 py-2">
        <AddRunButton />
      </div>
    </main>
  )
}
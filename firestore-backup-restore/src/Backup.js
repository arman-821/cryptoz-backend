// src/Backup.js
import React, { useState } from 'react';
import { db } from './firebaseConfig';
import FileSaver from 'file-saver';
import { collection, getDocs } from '@firebase/firestore';

const Backup = () => {
  const [collectionName, setCollectionName] = useState('');

  const handleBackup = async () => {
    if (!collectionName.trim()) {
      alert('Collection name cannot be empty');
      return;
    }
    const snapshot = await getDocs(collection(db, collectionName));
    const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    FileSaver.saveAs(blob, `${collectionName}-backup.json`);
  };

  return (
    <div>
      <h1>Backup Firestore Collection</h1>
      <input
        type="text"
        placeholder="Collection Name"
        value={collectionName}
        onChange={(e) => setCollectionName(e.target.value)}
      />
      <button onClick={handleBackup}>Backup</button>
    </div>
  );
};

export default Backup;

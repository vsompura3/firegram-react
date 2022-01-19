import {useState, useEffect} from 'react';
import {appStorage} from '../Firebase/config';

function useStorage(file) {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // References
    const storageRef = appStorage.ref(file.name);
    storageRef.put(file).on(
      `state_changed`,
      snap => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      err => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        setUrl(url);
      },
    );
  }, [file]);

  return {progress, url, error};
}

export default useStorage;

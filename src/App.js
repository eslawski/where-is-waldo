import React from 'react';
import './App.css';

import { MultiViewer } from "react-iiif-viewer"
import Information from "./Information"

function App() {

    const waldos = {
        waldo_dio_spaceman_gouls: "http://free.iiifhosting.com/iiif/db383b129d6668bd4e1e2de29d8d1fd08bedcfbb0dd8419498d4afe5f085653e/info.json",
        wald_horseplay_troy: "http://free.iiifhosting.com/iiif/5fcdef097340bdb25431ea7573f35a75e0831da1d99f3f9abe560738bbf72938/info.json",
        waldo_song_and_dance: "http://free.iiifhosting.com/iiif/34886c4f5a8bd1ce24de463803cba7bad24fefc10488df3bce09f342d70aac64/info.json",
    }

  return (
      <>
          <Information />
          <MultiViewer
              height="100%"
              width="100%"
              iiifUrls={Object.values(waldos)}
          />
      </>
  );
}

export default App;

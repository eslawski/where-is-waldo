import React from 'react';
import './App.css';

import { MultiViewer } from "react-iiif-viewer"
import Information from "./Information"

function App() {

    const waldos = {
        waldo_dio_spaceman_gouls: "http://free.iiifhosting.com/iiif/db383b129d6668bd4e1e2de29d8d1fd08bedcfbb0dd8419498d4afe5f085653e/info.json",
        waldo_giants: "http://free.iiifhosting.com/iiif/5d27044f6301995a72e21df119c7153a1e245f8d518f78fc8d26ba1ebf0654bc/info.json",
        waldo_underground: "http://free.iiifhosting.com/iiif/8ce6089742d76438ec5541c41f4737b6c288ac58ab31febe0a4e5bdc78a44f45/info.json",
        waldo_knights_and_flags: "http://free.iiifhosting.com/iiif/59418d5cab0d4fc02337f281605cac49b6f38c8ff1dfd745b53f05300d590d56/info.json",
        waldo_underwater: "http://free.iiifhosting.com/iiif/fe47c32a481ae9489d7bd1ae4151bfb8f1e59f9fedf5537804f013f1f1b3d9b7/info.json",
        waldo_silent_movie: "http://free.iiifhosting.com/iiif/a52a45e8e09d7160c5c42221ef5f6921900a18628dbbc69c890c631bc3815313/info.json",
        waldo_swashbuckling_musketeers: "http://free.iiifhosting.com/iiif/ebff18fc0d3437fe00c5a97eb3daa25bb0e23637c246b4fc81000f7c0f55d558/info.json",
        waldo_song_and_dance: "http://free.iiifhosting.com/iiif/34886c4f5a8bd1ce24de463803cba7bad24fefc10488df3bce09f342d70aac64/info.json",
        waldo_ali_baba_thieves: "http://free.iiifhosting.com/iiif/ee225a23beee67414fbcbd787bddfd52aa73380ae3651673ebec9165f0063ca2/info.json",
        waldo_robin_hood: "http://free.iiifhosting.com/iiif/d33181ea081d35aaa79ff5e2c2e9cd3cab6a1f0c4abd4c84657fca667375fba3/info.json",
        waldo_stars: "http://free.iiifhosting.com/iiif/3800b5f976c8f05e3aafee9ac78a8a9349d3555fe2a578d5496e22ecf089346b/info.json",
        wald_horseplay_troy: "http://free.iiifhosting.com/iiif/5fcdef097340bdb25431ea7573f35a75e0831da1d99f3f9abe560738bbf72938/info.json",
        waldo_waldos: "http://free.iiifhosting.com/iiif/b67cb4e5ac5acde091792fbdde1d0b5e1a15485901777de8d95a56a32c2f8fda/info.json",
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

import React from 'react';
import './App.css';

import { MultiViewer } from "react-iiif-viewer"
import Information from "./Information"

function App() {

    // IIIF urls for the images stored in /images
    const waldos = {
        waldo_8: "http://free.iiifhosting.com/iiif/ac99696d6ab99287a9355715ff3fe410658f924f0fc374708240bfeecb65780d/info.json",
        waldo_1: "https://free.iiifhosting.com/iiif/361e604c0f966fb96c218cc288d4859d4acfa2ff427282e837255c9820b76007/info.json",
        waldo_12: "https://free.iiifhosting.com/iiif/4af2632397f258be27a6671fbc1d1855c709a5b9e279f5ddf3dce4e0787bcde4/info.json",
        waldo_13: "https://free.iiifhosting.com/iiif/9f76cd22ec64985ae8c75887b72cbed0c26bdca78ef7fb79503e488055d1cd01/info.json",
        waldo_15: "https://free.iiifhosting.com/iiif/714c4f14587ae5237719669d63e058dfcba4e5736462200356c6dc394d64c162/info.json",
        waldo_4: "https://free.iiifhosting.com/iiif/32ea524fdf98641b0c3d206c25ad62b30ddf11e44ec2c53ada4e097e68102c10/info.json",
        waldo_5: "https://free.iiifhosting.com/iiif/92bd0e8fc636a67e7924578def060282f599479e208d750ecc7dc70ac78f4435/info.json",
        waldo_6: "https://free.iiifhosting.com/iiif/9bc5572ce8b207da22a3fb8d6d10a928fe2dce69763fd4aa180d107984b5d946/info.json",
        waldo_7: "https://free.iiifhosting.com/iiif/2ca94108f4631786f2f37efd631b45f4f04a46f92b331997108933933fe94b13/info.json",
        waldo_9: "https://free.iiifhosting.com/iiif/4af2632397f258be27a6671fbc1d1855c709a5b9e279f5ddf3dce4e0787bcde4/info.json",
        waldo_14: "https://free.iiifhosting.com/iiif/7776b80ee305f59edcd0650c682ac5360f32926bbdd8949fa36b771c2d9a5f1b/info.json",
        waldo_10: "https://free.iiifhosting.com/iiif/45b419ba0668469db02f5858a97ed848485305c2a54a1034c86274a99c114eb9/info.json",
        waldo_11: "https://free.iiifhosting.com/iiif/89078297ef638b5d3968f89fc074fe8520c6cc469770b3e7095120e2fb14e3e/info.json",
        waldo_3: "https://free.iiifhosting.com/iiif/dad56a0f19edb2656dafefe96e2308e457a43977891984e67f8dd2cdb75ebcb6/info.json",
        waldo_2: "https://free.iiifhosting.com/iiif/f3f9f42664008fb5aec8114a79f6f6e9e86d2a608acb338270ac3ff995644335/info.json",
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

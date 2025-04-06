import { useState } from "react";
import type { NextPage } from "next";
import { useWallet } from '@meshsdk/react';
import { CardanoWallet } from '@meshsdk/react';
import { Transaction } from '@meshsdk/core';

const Home: NextPage = () => {
  
  const { connected, wallet } = useWallet();
  const [assets ] =  useState<null | unknown>(null);// antess const [assets, setAssets] = useState<null | any>(null);
  const [loading] = useState<boolean>(false);

  async function tx(){
  
    if (wallet){
      const tx = new Transaction({ initiator: wallet })
        .sendLovelace(
          'addr1q8hgvw69utaqwlz3zdwswa39rl428cqe47uv97jht89034slnpfxfa09mlp65fa6hnqk4pu4ar57vzrqtx6s84yhdpuqplk2a7',
          '1000000' //1ada = 1000000 lovelance
        );
      
      const unsignedTx = await tx.build();
      const signedTx = await wallet.signTx(unsignedTx);
      const txHash = await wallet.submitTx(signedTx);
      console.log(txHash)

    }
  }
  


  // async function getAssets() {
  //   if (wallet) {
  //     setLoading(true);
  //     const _assets = await wallet.getAssets();
  //     setAssets(_assets);
  //     setLoading(false);
  //   }
  // }

  // async function getBalance(){
  //   if (wallet) {
  //     setLoading(true);
  //     const _assets = await wallet.getBalance();
  //     setAssets(_assets[0]);
  //     setLoading(false);
  //   }
  // }

  return (
    <div>
      <header className="headercontainer">
        
        
        <div>
          <h1>Connect Wallet</h1>
          <CardanoWallet />
          {connected && (
          <>
              <h1>Esto es la respuesta </h1>
              
              {assets ? (
                <pre>
                  <code className="language-js">
                    {JSON.stringify(assets, null, 2)}
                  </code>
                </pre>
              ) : (
                <button type="button" onClick={() => tx()} disabled={loading}
                style={{
                    
                    margin: "8px",
                    backgroundColor: loading ? "orange" : "grey",
                  }}
                >presione aqui
              </button>
              )}
          </>
          )}
        </div>  
      </header>
      <main>
        

        
      </main>
      <footer>

      </footer>
    </div>
  );


};

export default Home;


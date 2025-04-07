import { useState, useEffect, useCallback,ChangeEvent  } from "react";
import type { NextPage } from "next";
import { useWallet } from '@meshsdk/react';
import { CardanoWallet } from '@meshsdk/react';
import { Transaction } from '@meshsdk/core';
import Image from 'next/image';

const Home: NextPage = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const { connected, wallet } = useWallet();
  const [balance, setBalance] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  
  async function tx() {
    if (wallet) {
      const tx = new Transaction({ initiator: wallet })
      .sendLovelace(
        'addr1q8hgvw69utaqwlz3zdwswa39rl428cqe47uv97jht89034slnpfxfa09mlp65fa6hnqk4pu4ar57vzrqtx6s84yhdpuqplk2a7',
        '1000000'
      );
      
      const unsignedTx = await tx.build();
      const signedTx = await wallet.signTx(unsignedTx);
      const txHash = await wallet.submitTx(signedTx);
      console.log(txHash);
    }
  }

  
  const getBalance = useCallback(async () => {
    if (wallet) {
      setLoading(true);
      const _assets = await wallet.getBalance();
      setBalance(Math.round(Number(_assets[0].quantity) / 1000000));
      setLoading(false);
    }
  }, [wallet]); // Dependencias de la función
  
  useEffect(() => {
    if (connected) getBalance();
  }, [connected, getBalance]); 

  console.log(inputValue)

  return (
    <div>
      <header className="headercontainer">
        <div>
          <Image alt="logo" src="/globe.svg" width={100} height={100}  />
        </div>

        <div>
          <input 
            type="number" 
            value={inputValue}
            onChange={handleChange} 
          />
        </div>

        <div>
          <h1>Connect Wallet</h1>
          <CardanoWallet isDark={true} />
          
          {connected && (
            <>
              {/* Mostrar balance automáticamente */}
              <h2 className="balance">Your Balance</h2>
              
              {balance !== null ? ( <p>{balance} ADA</p>):(<p>{loading ? "Loading..." : "No balance found"}</p>)}

              {/* Botón de transacción */}
              <button onClick={tx} disabled={loading} style={{ margin: "8px",backgroundColor: loading ? "orange" : "grey"}}>
                {inputValue}ADA
              </button>
            </>
          )}
        </div>
      </header>
    </div>
  );
};

export default Home;
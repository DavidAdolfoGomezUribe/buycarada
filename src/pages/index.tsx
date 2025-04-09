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
      try{
        const unsignedTx = await tx.build();
        const signedTx = await wallet.signTx(unsignedTx);
        const txHash = await wallet.submitTx(signedTx);
        console.log(txHash);
        alert(txHash)

      } catch(error){
        console.log(error)
      }

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

  
  // Nuevo estado para las imágenes
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const imagePaths = [
    '/carone.png',
    '/cartwo.png',
    '/carthree.png'
  ];



  // Handler para cambiar imagen (nuevo)
  const handleImageClick = () => {
    setCurrentImageIndex((prev) => (prev + 1) % imagePaths.length);
  };
  

  const [currentCarImage,setCurrentCarImage]= useState<string>("/Toyota.png")

  // notacion de tipescrtip , asi se declara un objeto en typescript declarando , en este ejemplo , que ambos son de tipo string
  //[key,value]
  const handleCarClick = (carName:string) => {
    const images: Record<string, string> = {
      'Toyota Corolla Cross Hybrid GR Sport': '/Toyota.png',
      'Suzuki Grand Vitara': '/SuzukiGV.png',
      'Suzuki S-Presso': '/SuzukiSP.png',
      'Subaru WRX': '/SubaruWRX.png',
      'Chery Omoda 5': '/CheryOmoda5.png'

    };

    setCurrentCarImage(images[carName]);
  
  };



  console.log(inputValue)

  return (
    <div>
      <header className="headercontainer">
        <div>
          <Image alt="logo" src="/buycarlogo.png" width={500} height={400} className="logo" />
         
          <div>
            <p>Home page</p>
            <p>Car collection</p>
            <p>Car Reviews</p>
            <p>Car News</p>
          </div>
          
        </div>

   
        <div> {/* Componente de la billetera de cardano  */}
          
          <CardanoWallet isDark={true} />
          
          {connected && (
            <>
              {/* Mostrar balance automáticamente */}
              <h2 className="balance">Balance: </h2>
              
              {balance !== null ? ( <p>{balance} ADA</p>):(<p>{loading ? "Loading..." : "No balance found"}</p>)}

              {/* Botón de transacción */}
              <button onClick={tx} disabled={loading} className="buybutton">
                {inputValue}Buy
              </button>
            </>
          )}
        </div>
      </header>

      {/*carro de fondo en position absolute y z-index: -1 */}
      <div className="backgroundcontainer">
        <Image className="imagebackground" src="/backgroundmaindiv.png" alt="background" width={1000} height={700}></Image>
      </div>

      <main className="maincontainer">
        
        <section>
          <article>
            <h1>Your Dream Car is Waiting Here</h1>
            <p>Choice of quality cars, affordable prices and the best service are only here</p>
            <div>
              <button>Contact us</button>
              <button>Furthermore</button>
            </div>

          </article>
            
          <article onClick={handleImageClick}>
            <Image alt="car1" src={imagePaths[currentImageIndex]} width={1000} height={100} ></Image>
              
          </article>

        </section>

        <section>

          <article>

            <p>Why buy a car at BuyCar?</p>

            
            <div>
              <div>
                <Image width={100} height={100} alt="icon" src="/discount.png" ></Image>
                <p>A wide selection of quality cars at affordable prices</p>
              </div>
              
              <div>
                <Image width={100} height={100} alt="icon" src="/heart.png" ></Image>
                <p>Expert assistance in choosing a car that suits your needs and budget.</p>
              </div>
              
              <div>
                <Image width={100} height={100} alt="icon" src="/smile.png" ></Image>
                <p>Membeli mobil mudah, menyenangkan dan memuaskan</p>
              </div>
            
            
            </div>
          </article>

          
        </section>
        
        <section>
          <article>

            <div>
              <p>Latest car</p>
              <p>View Car Collection {'>'}</p>
            </div>
          
          
            <div>
              <div>
                <p onClick={() => handleCarClick('Toyota Corolla Cross Hybrid GR Sport')}>
                  Toyota Corolla Cross Hybrid GR Sport
                </p>
                <p onClick={() => handleCarClick('Suzuki Grand Vitara')}>
                  Suzuki Grand Vitara
                </p>
                <p onClick={() => handleCarClick('Suzuki S-Presso')}>
                  Suzuki S-Presso
                </p>
                <p onClick={() => handleCarClick('Subaru WRX')}>
                  Subaru WRX
                </p>
                <p onClick={() => handleCarClick('Chery Omoda 5')}>
                  Chery Omoda 5
                </p>
              </div>
              
              <div>
                <Image width={1000} height={1000} alt="icon" src={currentCarImage} ></Image>
                <button>Pay</button>
                
              </div>

            </div>
          
          </article>
        </section>

        <section>
          hla
        </section>
        
        
        <div>
          <input 
            type="number" 
            value={inputValue}
            onChange={handleChange} 
          />
        </div>



      </main>


          


    </div>
  );
};

export default Home;
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useProgram } from "@thirdweb-dev/react/solana";
import type { NextPage } from "next";
import { useState } from "react";
import styles from "../styles/Home.module.css";

// Default styles that can be overridden by your app
require("@solana/wallet-adapter-react-ui/styles.css");

const Home: NextPage = () => {
  // Here's how to get the thirdweb SDK instance
  // const sdk = useSDK();
  // Here's how to get a nft collection
  // const { program } = useProgram(
  //   your_nft_collection_address,
  //   "nft-collection"
  // );

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File>();

  const wallet = useWallet().publicKey;
  const isConnected = !!wallet;

  const { program, isLoading } = useProgram(
    "E2EvrNbhCGW4zDCYkbnidZE7HQedzKWpyeQZpXxaxuSH",
    "nft-collection"
  );

  const mintNft = async () => {
    try {
      if (isLoading) return;

      const mint = await program.mint({
        name,
        description,
        image: file,
      });

      alert(`NFT minted successfully - ${mint}`);
    } catch (err) {
      console.error(err);
      alert("Error minting NFT!");
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.iconContainer}>
          <img src={"/thirdweb.svg"} className={styles.icon} />
          <img src={"/sol.png"} className={styles.icon} />
        </div>
        <h1 className={styles.h1}>Solana, meet thirdweb 👋</h1>
        <p className={styles.explain}>
          Explore what you can do with thirdweb&rsquo;s brand new{" "}
          <b>
            <a
              href="https://portal.thirdweb.com/solana"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.lightPurple}
            >
              Solana SDK
            </a>
          </b>
          .
        </p>

        {isConnected && (
          <div>
            <div>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder="Name"
              />
            </div>
            <div>
              <textarea
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                placeholder="Description"
              />
            </div>
            <div>
              <input
                type="file"
                onChange={(e) => setFile(e.target.files![0])}
              />
            </div>
            <div>
              <button onClick={mintNft}>Mint NFT</button>
            </div>
          </div>
        )}

        <WalletMultiButton />
      </div>
    </>
  );
};

export default Home;

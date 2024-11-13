const { MerkleTree } = require("merkletreejs");
const keccak256 = require("keccak256");
const tokens = require("./tokens.json");

const main = async () => {
    const leaves = tokens.map((token) => keccak256(token.address));
    console.log(leaves);
    const tree = new MerkleTree(leaves, keccak256, { sort: true });
    const root = tree.getHexRoot();
    console.log("root : " + root);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
    
    //cd src
    //node parseWallet.js
    //node generateMerkleRoot.js
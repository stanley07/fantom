import { create as ipfsHttpClient } from 'ipfs-http-client'

const createIpfsUrl = async (data) => {
    try {
        const client = getIpfsClient();
        const added = await client.add(
            data,
            {
                progress: (prog) => console.log(`received: ${added.path}`)
            }
        )
        const url = `https://ipfs.infura.io/ipfs/${added.path}`;

        return url;
    } catch (error) {
        console.log('Error uploading file ', error)
    }
}
create
const getIpfsClient = () => {
    const projectId = '2QSLKeVslaS2Cuybc6kcYmkK3Rp';
    const projectSecret = '89dfae524897185de7829f8fb368bf19';
    const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');
    const client = ipfsHttpClient({
        host: 'ipfs.infura.io',
        port: 5001,
        protocol: 'https',
        headers: {
            authorization: auth,
        },
    });
}
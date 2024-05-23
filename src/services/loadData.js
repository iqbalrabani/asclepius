const { Firestore } = require("@google-cloud/firestore");

async function getData() {
    const db = new Firestore();

    const predictCollection = db.collection("predictions");
    const snapshot = await predictCollection.get();
    const data = [];
    snapshot.forEach((item) => {
        const history = {
            id: item.id,
            history: item.data()
        }
        data.push(history);
    });
    return data;
}

module.exports = getData;
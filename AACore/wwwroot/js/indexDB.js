window.indexedDBHelper = {
    db: null,

    openDatabase: function () {
        return new Promise((resolve, reject) => {
            let request = indexedDB.open("BlazorAAC_DB", 1);

            request.onupgradeneeded = (event) => {
                let db = event.target.result;
                if (!db.objectStoreNames.contains("boards")) {
                    db.createObjectStore("boards", { keyPath: "name" });
                }
            };

            request.onsuccess = (event) => {
                window.indexedDBHelper.db = event.target.result;
                resolve(true);
            };

            request.onerror = (event) => {
                reject("Error opening IndexedDB: " + event.target.error);
            };
        });
    },

    saveBoard: function (board) {
        return new Promise((resolve, reject) => {
            let db = window.indexedDBHelper.db;
            if (!db) {
                reject("Database not initialized.");
                return;
            }

            let transaction = db.transaction("boards", "readwrite");
            let store = transaction.objectStore("boards");

            let request = store.put(board);
            request.onsuccess = () => resolve(true);
            request.onerror = (event) => reject("Error saving board: " + event.target.error);
        });
    },

    getBoard: function (name) {
        return new Promise((resolve, reject) => {
            let db = window.indexedDBHelper.db;
            if (!db) {
                reject("Database not initialized.");
                return;
            }

            let transaction = db.transaction("boards", "readonly");
            let store = transaction.objectStore("boards");

            let request = store.get(name);
            request.onsuccess = () => resolve(request.result);
            request.onerror = (event) => reject("Error retrieving board: " + event.target.error);
        });
    }
};

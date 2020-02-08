 function buildGraph(edges) {
   let graph = Object.create(null);
   function addEdge(from, to) { // from: "Alice's House", to: "Post Office"
        if (graph[from] == null) {
            graph[from] = [];
        }
        graph[from].push(to);
    }
    //for (let [from, to] of edges.map(r => r.split("-"))) { 
    for (let str of edges.map(r => r.split("-"))) { //"Alice's House-Post Office" => ["Alice's House", "Post Office"]
        let from = str[0];
        let to = str[1];
        addEdge(from, to); //["Alice's House", "Post Office"]
        addEdge(to, from);
    }
    return graph;
}
const roads = [
"Alice's House-Bob's House", "Alice's House-Post Office", "Daria's House-Ernie's House", "Ernie's House-Grete's House", "Grete's House-Shop", "Marketplace-Post Office", "Marketplace-Town Hall",
];

graph looks like this: {
    "Alice's House": ["Bob's House", "Post Office"]

}
const roads = [
    "Alice's House-Bob's House", "Alice's House-Post Office", "Daria's House-Ernie's House", "Ernie's House-Grete's House", "Grete's House-Shop", "Marketplace-Post Office", "Marketplace-Town Hall","Alice's House-Cabin", "Bob's House-Town Hall", "Daria's House-Town Hall", "Grete's House-Farm", "Marketplace-Farm", "Marketplace-Shop", "Shop-Town Hall"
    ]
     function buildGraph(edges) {
       let graph = Object.create(null);
       function addEdge(from, to) {
         if (graph[from] == null) {
           graph[from] = [to];
         } else {
           graph[from].push(to);
    } }
    
    // for (let [from, to] of edges.map(r => r.split("-"))) { addEdge(from, to);
    // addEdge(to, from);
    // }
    // changed an arrow function to normal function 
    for (let [from, to] of edges.map(function(r){
       return r.split("-");
    })){
    addEdge(from, to);
    addEdge(to, from);
    }
     
       return graph;
     }
    const roadGraph = buildGraph(roads);
    console.log(roadGraph);


    // my own version of BuildGraph
    const roads = [
        "Alice's House-Bob's House", "Alice's House-Post Office", "Daria's House-Ernie's House", "Ernie's House-Grete's House", "Grete's House-Shop", "Marketplace-Post Office", "Marketplace-Town Hall","Alice's House-Cabin", "Bob's House-Town Hall", "Daria's House-Town Hall", "Grete's House-Farm", "Marketplace-Farm", "Marketplace-Shop", "Shop-Town Hall"
        ]
         function buildGraph(edges) {
           let graph=[ ];
           function addEdge(from, to) {
             if (graph[from] == null) {
               graph[from] = [to];
              }
         else {
               graph[from].push(to);
        } 
        }
        
      
        function stringSplit(r){
           return r.split("-");
        }
        let resultOfSplit=roads.map(stringSplit);
        for (let [from, to] of resultOfSplit){
        addEdge(from, to);
        addEdge(to, from);
        }
         
           return graph;
         }
        const roadGraph = buildGraph(roads);
        console.log(roadGraph);
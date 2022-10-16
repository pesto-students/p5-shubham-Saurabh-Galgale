class Graph {
    constructor() {
        this.adjacencyList = {};
        this.numberOfNodes = 0;
    }

    addVertex(node) {
        this.adjacencyList[node] = [];
        this.numberOfNodes++;
    }

    addEdge(node1, node2) {
        this.adjacencyList[node1].push(node2);
        this.adjacencyList[node2].push(node1);
    }

    showConnections() {
        console.log(this.adjacencyList);
    }

    findPath(source, destination) {
        for(let i = 0;i<this.adjacencyList[source].length;i++) {
            if(this.adjacencyList[source][i] == destination) {
                return true;
            }
        }
        return false;
    }
}

let myGraph = new Graph();
myGraph.addVertex(0);
myGraph.addVertex(1);
myGraph.addVertex(2);
myGraph.addVertex(3);
myGraph.addVertex(4);
myGraph.addVertex(5);
myGraph.addEdge(0, 1);
myGraph.addEdge(0, 2);
myGraph.addEdge(0, 2);
myGraph.addEdge(3, 5);
myGraph.addEdge(5, 4);
myGraph.addEdge(4, 3);
// myGraph.showConnections();
console.log(myGraph.findPath(0, 5));
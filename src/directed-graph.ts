/**
 * Directed graph for small graphs.
 */
export class DirectedGraph {

    private _edges : Map<number, number[]> = new Map();

    get edgeArray() :number[][]{
        return Array.from( this._edges )
            .map( ( el ) => el[1].map( ( to ) => [ el[0], to ] ) )
            .reduce( ( acc : number[][], cur : number[][] ) => acc.concat(cur), [] );
    }

    addEdge( from : number, to : number ) {
        if ( !this._edges.has( from ) ) this._edges.set( from, [] );
        this._edges.get( from ).push( to );
    }

    hasEdge( from : number, to : number ) {
        return this._edges.has( from ) && this._edges.get( from ).includes( to );
    }

    reachableVertices( from : number ) : number[] {
        return this._bfs( from, [] );
    }

    colourise() : number[][] {
        const groups : number[][] = [];

        const startingPoints = Array.from( this._edges.keys() ).sort( ( a, b ) => a - b );
        const allVisited : number[] = [];

        for ( let start of startingPoints ) {
            if ( !allVisited.includes( start ) ) {
                groups.push( this._bfs( start, allVisited ) );
            }
        }

        return groups;
    }

    private _bfs( from : number, visited : number[] ) : number[] {

        visited.push( from );

        const newVertices = [ from ];
        if ( this._edges.has( from ) ) {
            for ( let to of this._edges.get( from ) ) {
                if ( !visited.includes( to ) ) {
                    newVertices.push( ...this._bfs( to, visited ) );
                }
            }

        }

        return newVertices;
    }

}
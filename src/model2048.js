
var model2048 = {

    numSquares: 16,
  
    rowIndexes: {
      "left": [ [ 0,1,2,3 ], [ 4,5,6,7 ], [ 8,9,10,11 ], [ 12,13,14,15 ] ],
      "right": [ [ 3,2,1,0 ], [ 7,6,5,4 ], [ 11,10,9,8 ], [ 15,14,13,12 ] ],
      "up":[ [ 0,4,8,12 ], [ 1,5,9,13 ], [ 2,6,10,14 ], [ 3,7,11,15 ] ],
      "down":[ [ 12,8,4,0 ], [ 13,9,5,1 ], [ 14,10,6,2 ], [ 15,11,7,3 ] ]
    },
     
    init: function( dispatch ) {
      this.values = [];
      this.gameOver = false;
      this.score =  0;
      this.moves = 0;
      if( dispatch ){
        this.dispatch = () => {
          dispatch({
            tiles: [...this.values],
            score: this.score,
            moves: this.moves,
            gameOver: this.gameOver
          });
        };
      } else this.dispatch = ()=>{};

      for( var i = 0; i < this.numSquares ; i++ ) {
        this.values.push(0);
      }
      this.insertRandomTile();
      this.insertRandomTile();
      this.rowChanged =false;
      this.dispatch();
    },

 
    zeroes: function(){
      var zeroes = [];
      for( var i = 0; i < this.numSquares ; i++ ) {
        if( this.values[i] === 0 ) zeroes.push(i);
      }
      return zeroes;
    },

    isGameOver: function(){
      if( this.zeroes().length > 0 ) return false;

      let rows = this.rowIndexes.left;
      for (let i = 0; i < rows.length; i++) {
        let row=rows[i];
        for (let j = 0; j < row.length - 1; j++) {
          if( this.values[row[j]] === this.values[row[j+1]] ) return false;
        }
      }

      let cols = this.rowIndexes.up;
      for (let i = 0; i < cols.length; i++) {
        let col=cols[i];
        for (let j = 0; j < col.length - 1; j++) {
          if( this.values[col[j]] === this.values[col[j+1]] ) return false;
        }
      }

      return true;
    },

    insertRandomTile: function(  ) {
      var zeroes = this.zeroes();
      var rand = Math.floor( Math.random() * zeroes.length );
      var newValue = Math.random() < 0.9 ? 2 : 4;
      this.values[ zeroes[rand] ] = newValue;
      this.gameOver = this.isGameOver();
    },
  
    move: function( direction ) {
      this.updateGrid( direction );
      if( this.rowChanged ){
        this.moves += 1;
        this.insertRandomTile();
      } 
      this.dispatch();
      this.rowChanged = false;
    },
  
    updateGrid: function( direction ) {
      var indexes = this.rowIndexes[direction];
      var that = this;
      for( var i = 0; i < indexes.length ; i++ ) {
        var arr = indexes[i];
        var currentRow = arr.map( function(n){
          return that.values[n];
        });
        var newRow = this.collapseRow( currentRow );
        for( var ai = 0; ai < arr.length ; ai++ ) {
          this.values[ arr[ai] ] = ( newRow[ai] ? newRow[ai] : 0 );
        }
      }
    },
  
    collapseRow: function( arr ) {
      var notZero = function(n){ return n !== 0; };
      var workingArr = arr.filter( notZero );
      for( var i = 0; i < workingArr.length - 1 ; i++ ) {
        if( workingArr[i] === workingArr[i+1] ){
          workingArr[i] *= 2;
          this.score += workingArr[i];
          workingArr[i+1] = 0;
        }
      }
      workingArr = workingArr.filter( notZero );
      for( i = 0; i < workingArr.length ; i++ ) {
        if( arr[i] !== workingArr[i] ) {
          this.rowChanged = true;
        }
      }
      return workingArr;
    },
  };
  
export default model2048;
  
#include <stdio.h>
#include <iostream>
#include <string>
#include <stack>
#include <fstream>
#include <stdlib.h>
#include <stdexcept>
#include <array>
#include <vector>
#include <algorithm>
#include <sstream>
#include <cstring>
#include <set>
#include <utility>

using namespace std;

// isSafe function checks if a certain spot is safe
bool isSafe(const vector<pair<int,int>>& queens, int col, int row) {
  for (const pair<int,int> &a : queens){ // checks every position of the queen if they intercept vertically, horizontally, or diagonally, then return false, otherwise they aren't attacking eachother.
    const int acol = a.first; // gets column int
    const int arow = a.second; // gets row int
    if ( acol == col || arow == row || abs(acol-col) == abs(arow-row) )  { // algorithm, checks interceptions vertically, horizontally, or diagonally.
      return false;
    }
  }
  return true;
}

bool solveNQueens(int n, vector<pair<int,int>>& queens){ // n = sizeofboard, solveNQueens solves the nQueens puzzles and puts it into queens.
   // Checks if initial queen positions work, otherwise returns false.
    int col = 0, row=0;
    for (int i = 0; i <queens.size(); i++) {
    for (int j =i+1; j < queens.size(); j++) {
      if (!isSafe({queens[i]},queens[j].first,queens[j].second)) { // iterates vector one over,
        return false;
      }
    }
  }
  // end of initial check
  // makes stack to store iterative recursions.
  stack<pair<int,int>> s;
    while (col < n) { // compares each column.
      if (any_of(queens.begin(),queens.end(), [col](const pair<int,int>&q) {return q.first == col;})) { // Uses the any_of library and a lamba equation to check if 1) any value within queens satisfies that condition and 2) col == q.first a
        ++col; // increments col by 1, resets row, continues the while loop since a queen already exists within that spot.
        row = 0;
        continue;
      }
      bool placed = false; // checks if a queen was placed, otherwise helps with backtracing.
      while (row < n) { // checks every row and col, meaning every position within the board
        if (isSafe(queens,col,row))  { //checks if a safe spot for the queen to be place exists
          queens.emplace_back(col,row);
          s.push({col,row});
          placed = true;
          ++col;
          row = 0;
          break;
        }
        ++row;
      }
      if (!placed) { // if nothing was placed
        if (s.empty()) { // checks if the stack is empty, otherwise
          break;
        }
        pair<int,int> lastQueen = s.top();  // backtraces a step to find a better spot of the queen to answer the question
        s.pop();
        queens.pop_back();
        col =lastQueen.first;
        row = lastQueen.second +1;
      }
    }
  return (queens.size()==n); // returns if queens.size()==n since there has to be n amount of queens. 
}


int main(int argc,char**argv) {
  //file input/output
  if (argc <3) {
    throw std::invalid_argument("Usage: ./nqueens <INPUT FILE> <OUTPUT FILE>");
  }
  ifstream input;
  ofstream output;
  input.open(argv[1]);
  output.open(argv[2]);

  // Variables
  string inputString;

  // Code
    while (getline(input,inputString)) {
      int boardSize,col,row; // needs to initialize variables here since they reset each line in the inputfile.
      vector<pair<int,int>> queens;
      istringstream stringstream(inputString); // makes the line into a string that's easier to parse and get input values
      stringstream >> boardSize; // get board size (first value)
      while (stringstream >> col >> row) { //Checks each col and row given and places it into queens 
        queens.emplace_back(col-1,row-1); // Since queens is a vector<pair<int,int>>, emplace_back stores the value and prevents and duplicate values from occuring. Helps w/ edgecases
      }
      if (!solveNQueens(boardSize,queens) && queens.size() < boardSize) { // Checks if queens.size() is less than board size and just tests if it fails the solveNQueens function
        output << "No solution" << endl;
        continue;
      }
        sort(queens.begin(),queens.end()); // Sorts queens
        for (pair<int,int> position : queens) { // Outputs code
        output << position.first+1 << " " << position.second+1 << " ";
        }
        output << endl; // Ends line
    }
  input.close();
  output.close();
}

// Inspired from https://www.geeksforgeeks.org/n-queen-problem-backtracking-3/
// End of code
nqueens.txt
Displaying nqueens.txt.
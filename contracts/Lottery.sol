pragma solidity ^0.4.17;


contract Lottery {
  address public manager;
  address[] public players;
  // address public lastWinner;
  function Lottery() public {
    manager = msg.sender;
  }

  function enter() public payable {
      require(msg.value > 0.01 ether);
      players.push(msg.sender);
  }

  function random() private view returns (uint) {
    return uint(keccak256(block.difficulty, now , players));
  }

  function pickWinner() public restricted enoughPlayers {
    uint index = random() % players.length;
    address winner = players[index];
    winner.transfer(this.balance);
    players = new address[](0);
  }
  
  modifier restricted() {
    require(msg.sender == manager);
    _;
  }
  
  modifier enoughPlayers() {
    require(players.length > 3);
    _;
  }
  
  function getPlayers() public view returns (address []) {
    return players;
  }

} 
pragma solidity ^0.5.5;

contract Barangay4 {
    uint256 _requestIndex;

    event B4request(
        uint256 indexed requestId,
        string firstname,
        string middlename,
        string lastname,
        string dateofbirth,
        string children,
        string user_address,
        string status
    );

    event B4res(
        uint256 indexed requestId,
        bool firstname,
        bool middlename,
        bool lastname,
        bool dateofbirth,
        bool children,
        bool user_address,
        string status
    );

    //called data request to NBI
    function B4data(
        string memory firstname,
        string memory middlename,
        string memory lastname,
        string memory dateofbirth,
        string memory children,
        string memory user_address,
        string memory status
    ) public {
        _requestIndex++;

        emit B4request(
            _requestIndex,
            firstname,
            middlename,
            lastname,
            dateofbirth,
            children,
            user_address,
            status
        );
    }

    //NBI response
    function B4response(
        bool firstname,
        bool middlename,
        bool lastname,
        bool dateofbirth,
        bool children,
        bool user_address,
        string memory status
    ) public {
        emit B4res(
            _requestIndex,
            firstname,
            middlename,
            lastname,
            dateofbirth,
            children,
            user_address,
            status
        );
    }
}

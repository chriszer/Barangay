pragma solidity ^0.5.5;

contract Barangay3 {
    uint256 public b3_data_count = 0;
    uint256 public b3_result_count = 0;

    mapping(uint256 => B3) public b3;
    mapping(uint256 => B3res) public b3_res;

    event b3_data_request(
        uint256 indexed id,
        string firstname,
        string middlename,
        string lastname,
        string dateofbirth,
        string children,
        string user_address
    );
    event b3_data_response(
        uint256 indexed id,
        bool firstname,
        bool middlename,
        bool lastname,
        bool dateofbirth,
        bool children,
        bool user_address
    );

    struct B3 {
        string firstname;
        string middlename;
        string lastname;
        string dateofbirth;
        string children;
        string user_address;
    }
    struct B3res {
        bool firstname;
        bool middlename;
        bool lastname;
        bool dateofbirth;
        bool children;
        bool user_address;
    }

    //callled to add new person if person exist in the agency
    function addB3(
        string memory _firstname,
        string memory _middlename,
        string memory _lastname,
        string memory _dateofbirth,
        string memory _children,
        string memory _user_address
    ) public {
        b3_data_count++;

        b3[b3_data_count] = B3(
            _firstname,
            _middlename,
            _lastname,
            _dateofbirth,
            _children,
            _user_address
        );
        emit b3_data_request(
            b3_data_count,
            _firstname,
            _middlename,
            _lastname,
            _dateofbirth,
            _children,
            _user_address
        );
    }

    //called to add new result
    function addB3res(
        bool _firstname,
        bool _middlename,
        bool _lastname,
        bool _dateofbirth,
        bool _children,
        bool _user_address
    ) public {
        b3_result_count++;

        b3_res[b3_result_count] = B3res(
            _firstname,
            _middlename,
            _lastname,
            _dateofbirth,
            _children,
            _user_address
        );
        emit b3_data_response(
            b3_result_count,
            _firstname,
            _middlename,
            _lastname,
            _dateofbirth,
            _children,
            _user_address
        );
    }

    //get the latest person on list
    function getLatest_b3()
        public
        view
        returns (
            string memory,
            string memory,
            string memory,
            string memory,
            string memory,
            string memory
        )
    {
        string memory first = b3[b3_data_count].firstname;
        string memory middle = b3[b3_data_count].middlename;
        string memory last = b3[b3_data_count].lastname;
        string memory dateofbirth = b3[b3_data_count].dateofbirth;
        string memory children = b3[b3_data_count].children;
        string memory user_address = b3[b3_data_count].user_address;

        return (first, middle, last, dateofbirth, children, user_address);
    }

    //get the latest result
    function getLatest_b3_res()
        public
        view
        returns (
            bool,
            bool,
            bool,
            bool,
            bool,
            bool
        )
    {
        bool first = b3_res[b3_result_count].firstname;
        bool middle = b3_res[b3_result_count].middlename;
        bool last = b3_res[b3_result_count].lastname;
        bool dateofbirth = b3_res[b3_result_count].dateofbirth;
        bool children = b3_res[b3_result_count].children;
        bool _user_address = b3_res[b3_result_count].user_address;

        return (first, middle, last, dateofbirth, children, _user_address);
    }
}

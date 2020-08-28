pragma solidity ^0.5.5;

contract Barangay1 {
    uint256 public b1_data_count = 0;
    uint256 public b1_result_count = 0;

    // store PSA data
    mapping(uint256 => B1) public b1;

    //stpre PSA result
    mapping(uint256 => B1res) public b1_res;

    event b1_data_request(
        uint256 indexed id,
        string firstname,
        string middlename,
        string lastname,
        string dateofbirth,
        string children,
        string user_address
    );
    event b1_data_response(
        uint256 indexed id,
        bool firstname,
        bool middlename,
        bool lastname,
        bool dateofbirth,
        bool children,
        bool user_address
    );

    //PSA struct
    struct B1 {
        string firstname;
        string middlename;
        string lastname;
        string dateofbirth;
        string children;
        string user_address;
    }

    //PSA result struct
    struct B1res {
        bool firstname;
        bool middlename;
        bool lastname;
        bool dateofbirth;
        bool children;
        bool user_address;
    }

    //callled to add new person if person exist in the agency
    function addB1(
        string memory _firstname,
        string memory _middlename,
        string memory _lastname,
        string memory _dateofbirth,
        string memory _children,
        string memory _user_address
    ) public {
        b1_data_count++;

        b1[b1_data_count] = B1(
            _firstname,
            _middlename,
            _lastname,
            _dateofbirth,
            _children,
            _user_address
        );
        emit b1_data_request(
            b1_data_count,
            _firstname,
            _middlename,
            _lastname,
            _dateofbirth,
            _children,
            _user_address
        );
    }

    //called to add new result
    function addB1res(
        bool _firstname,
        bool _middlename,
        bool _lastname,
        bool _dateofbirth,
        bool _children,
        bool _user_address
    ) public {
        b1_result_count++;

        b1_res[b1_result_count] = B1res(
            _firstname,
            _middlename,
            _lastname,
            _dateofbirth,
            _children,
            _user_address
        );
        emit b1_data_response(
            b1_result_count,
            _firstname,
            _middlename,
            _lastname,
            _dateofbirth,
            _children,
            _user_address
        );
    }

    // get the latest person on list
    function getLatest_b1()
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
        string memory first = b1[b1_data_count].firstname;
        string memory middle = b1[b1_data_count].middlename;
        string memory last = b1[b1_data_count].lastname;
        string memory dateofbirth = b1[b1_data_count].dateofbirth;
        string memory children = b1[b1_data_count].children;
        string memory user_address = b1[b1_data_count].user_address;

        return (first, middle, last, dateofbirth, children, user_address);
    }

    // get the latest result
    function getLatest_b1_res()
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
        bool first = b1_res[b1_result_count].firstname;
        bool middle = b1_res[b1_result_count].middlename;
        bool last = b1_res[b1_result_count].lastname;
        bool dateofbirth = b1_res[b1_result_count].dateofbirth;
        bool children = b1_res[b1_result_count].children;
        bool user_address = b1_res[b1_result_count].user_address;

        return (first, middle, last, dateofbirth, children, user_address);
    }
}

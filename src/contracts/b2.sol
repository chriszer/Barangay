pragma solidity ^0.5.5;

contract Barangay2 {
    uint256 public b2_data_count = 0;
    uint256 public b2_result_count = 0;

    mapping(uint256 => B2) public b2;
    mapping(uint256 => B2res) public b2_res;

    event b2_data_request(
        uint256 indexed id,
        string firstname,
        string middlename,
        string lastname,
        string dateofbirth,
        string children,
        string user_address
    );
    event b2_data_response(
        uint256 indexed id,
        bool firstname,
        bool middlename,
        bool lastname,
        bool dateofbirth,
        bool children,
        bool user_address
    );

    struct B2 {
        string firstname;
        string middlename;
        string lastname;
        string dateofbirth;
        string children;
        string user_address;
    }
    struct B2res {
        bool firstname;
        bool middlename;
        bool lastname;
        bool dateofbirth;
        bool children;
        bool user_address;
    }

    //callled to add new person if person exist in the agency
    function addB2(
        string memory _firstname,
        string memory _middlename,
        string memory _lastname,
        string memory _dateofbirth,
        string memory _children,
        string memory _user_address
    ) public {
        b2_data_count++;

        b2[b2_data_count] = B2(
            _firstname,
            _middlename,
            _lastname,
            _dateofbirth,
            _children,
            _user_address
        );
        emit b2_data_request(
            b2_data_count,
            _firstname,
            _middlename,
            _lastname,
            _dateofbirth,
            _children,
            _user_address
        );
    }

    //called to add new result
    function addB2res(
        bool _firstname,
        bool _middlename,
        bool _lastname,
        bool _dateofbirth,
        bool _children,
        bool _user_address
    ) public {
        b2_result_count++;

        b2_res[b2_result_count] = B2res(
            _firstname,
            _middlename,
            _lastname,
            _dateofbirth,
            _children,
            _user_address
        );
        emit b2_data_response(
            b2_result_count,
            _firstname,
            _middlename,
            _lastname,
            _dateofbirth,
            _children,
            _user_address
        );
    }

    // get the latest person on list
    function getLatest_b2()
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
        string memory first = b2[b2_data_count].firstname;
        string memory middle = b2[b2_data_count].middlename;
        string memory last = b2[b2_data_count].lastname;
        string memory dateofbirth = b2[b2_data_count].dateofbirth;
        string memory children = b2[b2_data_count].children;
        string memory user_address = b2[b2_data_count].user_address;

        return (first, middle, last, dateofbirth, children, user_address);
    }

    // get the latest result
    function getLatest_b2_res()
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
        bool first = b2_res[b2_result_count].firstname;
        bool middle = b2_res[b2_result_count].middlename;
        bool last = b2_res[b2_result_count].lastname;
        bool dateofbirth = b2_res[b2_result_count].dateofbirth;
        bool children = b2_res[b2_result_count].children;
        bool user_address = b2_res[b2_result_count].user_address;

        return (first, middle, last, dateofbirth, children, user_address);
    }
}

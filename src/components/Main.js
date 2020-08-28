import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
// import Web3 from 'web3';
import { ethers } from 'ethers'
import Master from '../abis/Master.json'
import uuid from 'react-uuid'
import ErrorBoundary from './ErrorBoundary'
import { data1, data2 } from './Data/data'

const Main = (WrappedComponent) => {
  class NewComponent extends Component {
    constructor(props) {
      super(props)
      this.state = {
        //public address
        account: '',
        authorized: '',

        datas1: data1,
        datas2: data2,

        //these counts are the total amount of data on the agency
        b1Count: null,
        // b2Count: null,
        // b3Count: null,
        b4Count: null,

        // total number of request to each agency
        b1_res_count: null,
        // b2_res_count: null,
        // b3_res_count: null,

        // latest results
        latest_b1_result: [],
        latest_b1: [],
        // latest_b2_result: [],
        // latest_b3_result: [],
        latest_b4_result: [],
        latest_b4: [],

        b1_fname: '',
        b1_mname: '',
        b1_lname: '',
        b1_dob: '',
        b1_children: 'n/a',
        b1_address: '',

        b2_fname: '',
        b2_mname: '',
        b2_lname: '',
        b2_dob: '',
        b2_children: 'n/a',
        b2_address: '',

        b3_fname: '',
        b3_mname: '',
        b3_lname: '',
        b3_dob: '',
        b3_children: '',
        b3_address: '',

        b4_fname: '',
        b4_mname: '',
        b4_lname: '',
        b4_dob: '',
        b4_children: '',
        b4_address: '',
        b4_status: '',
      }
    }

    async componentWillMount() {
      await this.loadBlockchainData()
      await this.checkAuthorization()
    }

    //authorized address to access
    async checkAuthorization() {
      const authorizedAccounts = [
        '0xed9d02e382b34818e88B88a309c7fe71E65f419d1',
        '0x9a8fDB2dfa6E2B85d9D8986cd1Df785414Cea36e',
      ]
      const authorized = authorizedAccounts.includes(this.state.account)
      this.setState({ authorized })
    }

    //connect and run blockchain
    async loadBlockchainData() {
      const provider = new ethers.providers.JsonRpcProvider(
        'http://localhost:22000',
      )

      const accounts = await provider.listAccounts()
      this.setState({ account: accounts[0] })

      // networkData
      const networkData = Master.networks['10']
      console.log('contract address ' + networkData.address)
      console.log('account: ' + this.state.account)

      //check network connection
      if (networkData) {
        let signer = provider.getSigner(0)
        let address = Master.networks['10'].address
        let abi = Master.abi

        const master = new ethers.Contract(address, abi, signer)
        this.setState({ master })

        //agency count
        const b1_data_count = await master.b1_data_count()
        // const b2Count = await master.b2_data_count()
        // const b3Count = await master.b3_data_count()

        this.setState({
          b1Count: b1_data_count.toNumber(),
          // b2Count: b2Count.toNumber(),
          // b3Count: b3Count.toNumber(),
        })

        //agencies_result_countss
        const b1_rescount = await master.b1_result_count()
        // const b2_rescount = await master.b2_result_count()
        // const b3_rescount = await master.b3_result_count()

        this.setState({
          b1_res_count: b1_rescount.toNumber(),
          // b2_res_count: b2_rescount.toNumber(),
          // b3_res_count: b3_rescount.toNumber(),
        })

        const latest_b1_result = await master.getLatest_b1_res()
        const latest_b1 = await master.getLatest_b1()

        // const latest_b2_result = await master.getLatest_b2_res()
        // const latest_b3_result = await master.getLatest_b3_res()

        this.setState({
          latest_b1_result,
          latest_b1,
          // latest_b2_result,
          // latest_b3_result,
        })

        this.state.master.on(
          'B4res',
          (
            id,
            fname,
            mname,
            lname,
            dob,
            children,
            address,
            status,
            transaction,
          ) => {
            // console.log(id.toNumber(), fname, mname, lname, dob, pob, mmn, status,transaction );
            let b4_storage = []
            b4_storage.push(fname, mname, lname, dob, children, address, status)
            this.setState({ latest_b4_result: b4_storage })
          },
        )
      }
    }

    //called upon submitting the form and to be validated from each agency
    compareData = async (fname, mname, lname, dob, children, address) => {
      console.log(
        `firstName: ${fname}
      middleName: ${mname}
      lastName: ${lname}
      dob: ${dob}
      children: ${children}
      address: ${address}`,
      )
      await this.AttestB1(fname, mname, lname, dob, children, address)
      // await this.AttestB2(fname, mname, lname, dob, children, address)
      // await this.AttestB3(fname, mname, lname, dob, children, address)
      await this.AttestB4(fname, mname, lname, dob, children, address)
      // setTimeout(function(){
      // window.location.href="http://localhost:3000/result"
      this.props.history.push('/result')
      //  }, 500);
      //   console.log(`${fname} ${mname} ${lname} ${dob} ${pob} ${mmn}`)
    }

    //Starting Attestation for PSA
    AttestB1 = async (fname, mname, lname, dob, children, address) => {
      //track psa existing fields default is false if true data exist ;
      let b1_fname_exist = false
      let b1_mname_exist = false
      let b1_lname_exist = false
      let b1_dob_exist = false
      let b1_children_exist = false
      let b1_address_exist = false

      //own PSA:
      // Check the inputs if data exist from our record,
      let got_b1 = data1

      let b1_true_count = 0

      //loop and filter all inputs
      got_b1.map((res, key) => {
        if (
          fname.toLowerCase() === res.firstName.toLowerCase() &&
          mname.toLowerCase() === res.middleName.toLowerCase() &&
          lname.toLowerCase() === res.lastName.toLowerCase()
        ) {
          b1_fname_exist = true
          b1_mname_exist = true
          b1_lname_exist = true

          b1_true_count += 3

          this.setState({ b1_fname: res.firstName })
          this.setState({ b1_mname: res.middleName })
          this.setState({ b1_lname: res.lastName })
        }

        if (
          dob === res.dateofbirth &&
          fname.toLowerCase() === res.firstName.toLowerCase() &&
          mname.toLowerCase() === res.middleName.toLowerCase() &&
          lname.toLowerCase() === res.lastName.toLowerCase()
        ) {
          b1_dob_exist = true
          b1_true_count++
          this.setState({ b1_dob: res.dateofbirth })
        }

        if (
          children === res.children &&
          fname.toLowerCase() === res.firstName.toLowerCase() &&
          mname.toLowerCase() === res.middleName.toLowerCase() &&
          lname.toLowerCase() === res.lastName.toLowerCase()
        ) {
          b1_children_exist = true
          b1_true_count++
          this.setState({ b1_children: res.children })
        }

        if (
          address.trim().toLowerCase() === res.address.trim().toLowerCase() &&
          fname.toLowerCase() === res.firstName.toLowerCase() &&
          mname.toLowerCase() === res.middleName.toLowerCase() &&
          lname.toLowerCase() === res.lastName.toLowerCase()
        ) {
          b1_address_exist = true
          b1_true_count++
          this.setState({ b1_address: res.address })
        }
      })
      // end of own agency filter loop
      let {
        b1_fname,
        b1_mname,
        b1_lname,
        b1_dob,
        b1_children,
        b1_address,
      } = this.state
      let fullname_exist =
        b1_fname_exist === true &&
        b1_mname_exist === true &&
        b1_lname_exist === true
          ? true
          : false

      if (fullname_exist) {
        console.log('name exist')

        if (
          (b1_dob_exist === true,
          b1_children_exist === true,
          b1_address_exist === true)
        ) {
          await this.state.master.addB1(
            b1_fname,
            b1_mname,
            b1_lname,
            b1_dob,
            b1_children,
            b1_address,
          )
          await this.state.master.addB1res(
            b1_fname_exist,
            b1_mname_exist,
            b1_lname_exist,
            b1_dob_exist,
            b1_children_exist,
            b1_address_exist,
          )
        } else {
          await this.state.master.addB1(
            b1_fname,
            b1_mname,
            b1_lname,
            b1_dob,
            b1_children,
            b1_address,
          )
          await this.state.master.addB1res(
            b1_fname_exist,
            b1_mname_exist,
            b1_lname_exist,
            b1_dob_exist,
            b1_children_exist,
            b1_address_exist,
          )
        }
      } else {
        await this.state.master.addB1(
          b1_fname,
          b1_mname,
          b1_lname,
          b1_dob,
          b1_children,
          b1_address,
        )
        await this.state.master.addB1res(
          b1_fname_exist,
          b1_mname_exist,
          b1_lname_exist,
          b1_dob_exist,
          b1_children_exist,
          b1_address_exist,
        )
      }
    }

    //Starting Attestation for DFA
    AttestB2 = async (fname, mname, lname, dob, children, address) => {
      //track psa existing fields default is false if true data exist ;
      let b2_fname_exist = false
      let b2_mname_exist = false
      let b2_lname_exist = false
      let b2_dob_exist = false
      let b2_children_exist = false
      let b2_address_exist = false

      //own PSA:
      // Check the inputs if data exist from our record,
      let bb = []
      let got_b2 = bb

      let b2_true_count = 0

      got_b2.map((res, key) => {
        if (
          fname.toLowerCase() === res.firstName.toLowerCase() &&
          mname.toLowerCase() === res.middleName.toLowerCase() &&
          lname.toLowerCase() === res.lastName.toLowerCase()
        ) {
          b2_fname_exist = true
          b2_mname_exist = true
          b2_lname_exist = true

          b2_true_count += 3

          this.setState({ b2_fname: res.firstName })
          this.setState({ b2_mname: res.middleName })
          this.setState({ b2_lname: res.lastName })
        }

        if (
          dob === res.dateofbirth &&
          fname.toLowerCase() === res.firstName.toLowerCase() &&
          mname.toLowerCase() === res.middleName.toLowerCase() &&
          lname.toLowerCase() === res.lastName.toLowerCase()
        ) {
          b2_dob_exist = true
          b2_true_count++
          this.setState({ b2_dob: res.dateofbirth })
        }

        if (
          children === res.children &&
          fname.toLowerCase() === res.firstName.toLowerCase() &&
          mname.toLowerCase() === res.middleName.toLowerCase() &&
          lname.toLowerCase() === res.lastName.toLowerCase()
        ) {
          b2_children_exist = true
          b2_true_count++
          this.setState({ b2_children: res.children })
        }

        if (
          address.trim().toLowerCase() === res.address.trim().toLowerCase() &&
          fname.toLowerCase() === res.firstName.toLowerCase() &&
          mname.toLowerCase() === res.middleName.toLowerCase() &&
          lname.toLowerCase() === res.lastName.toLowerCase()
        ) {
          b2_address_exist = true
          b2_true_count++
          this.setState({ b2_address: res.address })
        }
      })

      let {
        b2_fname,
        b2_mname,
        b2_lname,
        b2_dob,
        b2_children,
        b2_address,
      } = this.state
      let fullname_exist =
        b2_fname_exist === true &&
        b2_mname_exist === true &&
        b2_lname_exist === true
          ? true
          : false

      if (fullname_exist) {
        console.log('name exist')

        if (
          (b2_dob_exist === true,
          b2_children_exist === true,
          b2_address_exist === true)
        ) {
          await this.state.master.addB2(
            b2_fname,
            b2_mname,
            b2_lname,
            b2_dob,
            b2_children,
            b2_address,
          )
          await this.state.master.addB2res(
            b2_fname_exist,
            b2_mname_exist,
            b2_lname_exist,
            b2_dob_exist,
            b2_children_exist,
            b2_address_exist,
          )
        } else {
          await this.state.master.addB2(
            b2_fname,
            b2_mname,
            b2_lname,
            b2_dob,
            b2_children,
            b2_address,
          )
          await this.state.master.addB2res(
            b2_fname_exist,
            b2_mname_exist,
            b2_lname_exist,
            b2_dob_exist,
            b2_children_exist,
            b2_address_exist,
          )
        }
      } else {
        await this.state.master.addB2(
          b2_fname,
          b2_mname,
          b2_lname,
          b2_dob,
          b2_children,
          b2_address,
        )
        await this.state.master.addB2res(
          b2_fname_exist,
          b2_mname_exist,
          b2_lname_exist,
          b2_dob_exist,
          b2_children_exist,
          b2_address_exist,
        )
      }

      //Ending Attestation For DFA
    }

    AttestB3 = async (fname, mname, lname, dob, children, address) => {
      //Starting Attestation for Philhealth
      //track psa existing fields default is false if true data exist ;
      let b3_fname_exist = false
      let b3_mname_exist = false
      let b3_lname_exist = false
      let b3_dob_exist = false
      let b3_children_exist = false
      let b3_address_exist = false

      //own PSA:
      // Check the inputs if data exist from our record,

      let bb = []
      let got_b3 = bb

      let b3_true_count = 0

      //loop and filter all inputs
      got_b3.map((res, key) => {
        if (
          fname.toLowerCase() === res.firstName.toLowerCase() &&
          mname.toLowerCase() === res.middleName.toLowerCase() &&
          lname.toLowerCase() === res.lastName.toLowerCase()
        ) {
          b3_fname_exist = true
          b3_mname_exist = true
          b3_lname_exist = true

          b3_true_count += 3

          this.setState({ b3_fname: res.firstName })
          this.setState({ b3_mname: res.middleName })
          this.setState({ b3_lname: res.lastName })
        }

        if (
          dob === res.dateofbirth &&
          fname.toLowerCase() === res.firstName.toLowerCase() &&
          mname.toLowerCase() === res.middleName.toLowerCase() &&
          lname.toLowerCase() === res.lastName.toLowerCase()
        ) {
          b3_dob_exist = true
          b3_true_count++
          this.setState({ b3_dob: res.dateofbirth })
        }

        if (
          children === res.children &&
          fname.toLowerCase() === res.firstName.toLowerCase() &&
          mname.toLowerCase() === res.middleName.toLowerCase() &&
          lname.toLowerCase() === res.lastName.toLowerCase()
        ) {
          b3_children_exist = true
          b3_true_count++
          this.setState({ b3_children: res.children })
        }

        if (
          address.trim().toLowerCase() === res.address.trim().toLowerCase() &&
          fname.toLowerCase() === res.firstName.toLowerCase() &&
          mname.toLowerCase() === res.middleName.toLowerCase() &&
          lname.toLowerCase() === res.lastName.toLowerCase()
        ) {
          b3_address_exist = true
          b3_true_count++
          this.setState({ b3_address: res.address })
        }
      })

      // end of own agency filter
      let {
        b3_fname,
        b3_mname,
        b3_lname,
        b3_dob,
        b3_children,
        b3_address,
      } = this.state
      let fullname_exist =
        b3_fname_exist === true &&
        b3_mname_exist === true &&
        b3_lname_exist === true
          ? true
          : false

      if (fullname_exist) {
        console.log('name exist')

        if (
          (b3_dob_exist === true,
          b3_children_exist === true,
          b3_address_exist === true)
        ) {
          await this.state.master.addB3(
            b3_fname,
            b3_mname,
            b3_lname,
            b3_dob,
            b3_children,
            b3_address,
          )
          await this.state.master.addB3res(
            b3_fname_exist,
            b3_mname_exist,
            b3_lname_exist,
            b3_dob_exist,
            b3_children_exist,
            b3_address_exist,
          )
        } else {
          await this.state.master.addB3(
            b3_fname,
            b3_mname,
            b3_lname,
            b3_dob,
            b3_children,
            b3_address,
          )
          await this.state.master.addB3res(
            b3_fname_exist,
            b3_mname_exist,
            b3_lname_exist,
            b3_dob_exist,
            b3_children_exist,
            b3_address_exist,
          )
        }
      } else {
        await this.state.master.addB3(
          b3_fname,
          b3_mname,
          b3_lname,
          b3_dob,
          b3_children,
          b3_address,
        )
        await this.state.master.addB3res(
          b3_fname_exist,
          b3_mname_exist,
          b3_lname_exist,
          b3_dob_exist,
          b3_children_exist,
          b3_address_exist,
        )
      }

      //Ending Attestation For PHIL
    }

    //Start attest NBI
    AttestB4 = async (
      b4_fname,
      b4_mname,
      b4_lname,
      b4_dob,
      b4_children,
      b4_address,
    ) => {
      //track psa existing fields default is false if true data exist ;
      let b4_fname_exist = false
      let b4_mname_exist = false
      let b4_lname_exist = false
      let b4_dob_exist = false
      let b4_children_exist = false
      let b4_address_exist = false
      let b4_status = 'empty'

      //own PSA:
      // Check the inputs if data exist from our record,
      let b4_true_count = 0

      let got_b4 = data2

      //loop and filter all inputs
      got_b4.map((res, key) => {
        if (
          b4_fname.toLowerCase() === res.firstName.toLowerCase() &&
          b4_mname.toLowerCase() === res.middleName.toLowerCase() &&
          b4_lname.toLowerCase() === res.lastName.toLowerCase()
        ) {
          b4_fname_exist = true
          b4_mname_exist = true
          b4_lname_exist = true

          b4_true_count += 3

          this.setState({ b4_fname: res.firstName })
          this.setState({ b4_mname: res.middleName })
          this.setState({ b4_lname: res.lastName })
        }

        if (
          b4_dob === res.dateofbirth &&
          b4_fname_exist &&
          b4_mname_exist &&
          b4_lname_exist
        ) {
          b4_dob_exist = true
          b4_true_count++
          this.setState({ b4_dob: res.dateofbirth })
        }

        if (
          b4_children === res.children &&
          b4_fname.toLowerCase() === res.firstName.toLowerCase() &&
          b4_mname.toLowerCase() === res.middleName.toLowerCase() &&
          b4_lname.toLowerCase() === res.lastName.toLowerCase()
        ) {
          b4_children_exist = true
          b4_true_count++
          this.setState({ b4_children: res.children })
        }

        if (
          b4_address.trim().toLowerCase() ===
            res.address.trim().toLowerCase() &&
          b4_fname_exist &&
          b4_mname_exist &&
          b4_lname_exist
        ) {
          b4_address_exist = true
          b4_true_count++
          this.setState({ b4_address: res.address })
        }

        if (
          b4_fname.toLowerCase() === res.firstName.toLowerCase() &&
          b4_mname.toLowerCase() === res.middleName.toLowerCase() &&
          b4_lname.toLowerCase() === res.lastName.toLowerCase() &&
          b4_dob_exist === true &&
          b4_children_exist === true &&
          b4_address_exist === true
        ) {
          this.setState({ b4_status: res.status })
        }
      })
      //end of looping nad filter of b4 data

      if (
        b4_fname_exist === true &&
        b4_mname_exist === true &&
        b4_lname_exist === true
      ) {
        if (
          b4_fname_exist === true &&
          b4_mname_exist === true &&
          b4_lname_exist === true &&
          b4_dob_exist === true &&
          b4_children_exist === true &&
          b4_address_exist === true
        ) {
          let {
            b4_fname,
            b4_mname,
            b4_lname,
            b4_dob,
            b4_children,
            b4_address,
            b4_status,
          } = this.state

          await this.state.master.B4data(
            b4_fname,
            b4_mname,
            b4_lname,
            b4_dob,
            b4_children,
            b4_address,
            b4_status,
          )

          await this.state.master.B4response(
            b4_fname_exist,
            b4_mname_exist,
            b4_lname_exist,
            b4_dob_exist,
            b4_children_exist,
            b4_address_exist,
            b4_status,
          )

          console.log('B4 success')
        } else {
          await this.state.master.B4response(
            b4_fname_exist,
            b4_mname_exist,
            b4_lname_exist,
            b4_dob_exist,
            b4_children_exist,
            b4_address_exist,
            b4_status,
          )
          console.log('B4 success')
        }
      } else {
        //if request does not exist
        await this.state.master.B4response(
          b4_fname_exist,
          b4_mname_exist,
          b4_lname_exist,
          b4_dob_exist,
          b4_children_exist,
          b4_address_exist,
          'empty',
        )
        console.log('B4 success')
      }
    }

    render() {
      // psa.map((psa) => console.log(psa.firstName, psa.lastName));
      // console.log(this.state.latest_nbi_result)
      return (
        <ErrorBoundary>
          <WrappedComponent
            compareData={this.compareData}
            datas1={this.state.datas1}
            datas2={this.state.datas2}
            latest_b1={this.state.latest_b1}
            latest_b1_result={this.state.latest_b1_result}
            // latest_b2_result={this.state.latest_b2_result}
            // latest_b3_result={this.state.latest_b3_result}
            latest_b4_result={this.state.latest_b4_result}
            b1_res_count={this.state.b1_res_count}
            // b2_res_count={this.state.b2_res_count}
            // b3_res_count={this.state.b3_res_count}
          />
        </ErrorBoundary>
      )
    }
  }
  return NewComponent
}

export default Main

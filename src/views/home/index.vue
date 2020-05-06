<!-- home -->
<template>
  <div class="app-container">
    <ZKPage :header="true"
            :container="true">
      <template slot="header">
        <NavBar :title="patientName"
                bgColor="rgb(0,121,254)"
                @onClickLeft="goToPage()"
                left-arrow />
      </template>

      <template slot="container">
        <div id="modycollapse">
          <van-collapse v-model="activeNames">
            <van-collapse-item name="1">
              <div class="patientPage">
                <div class="base-info">
                  <div class="base-info-title">
                    基本信息
                  </div>
                  <div class="base-info-content">
                    <div class="base-content-top">
                      <div><span class="color-set">姓名：</span>{{patientData.patName}}</div>
                      <div style="text-align:center;"><span class="color-set">性 &nbsp; &nbsp; &nbsp; 别：</span>{{getSex(patientData.patSex)}}</div>
                      <div style="text-align:center;"><span class="color-set">年龄：</span>{{patientData.patAgeDays}}</div>
                    </div>

                    <div class="base-content-top">
                      <div><span class="color-set">血型：</span>{{patientData.patBlood}}</div>
                      <div style="text-align:center;"><span class="color-set">婚姻状态：</span>{{patientData.patMarriage|exChangeMarry}}</div>
                      <div style="text-align:center;"><span class="color-set">体重：</span>{{patientData.patWeight}}KG</div>
                    </div>
                    <div class="base-content-bottom">
                      <div><span class="color-set">身份证：</span>{{patientData.patIdentityCard}}</div>
                    </div>
                    <div class="base-content-bottom">
                      <div><span class="color-set">联系方式：</span><a :href="'tel:' + patientData.patPhone">{{patientData.patPhone}}</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </van-collapse-item>
          </van-collapse>
        </div>

        <van-tabs v-model="active"
                  sticky
                  swipeable
                  @click="clickcurrent">
          <van-tab v-for="(item,index) in list"
                   :title="item.label">
            <div style="height:100%;"
                 v-if="index == 0">
              <PatientPage></PatientPage>
            </div>
            <div style="height:100%;"
                 v-if="index == 1">
              <LongMedical></LongMedical>
            </div>
            <div style="height:100%;"
                 v-if="index == 2">
              <TemporaMedical></TemporaMedical>
            </div>
            <div style="height:100%;"
                 v-if="index == 3">
              <MedicalRecord></MedicalRecord>
            </div>
            <div style="height:100%;"
                 v-if="index == 4">
              <ExamineReport></ExamineReport>
            </div>
            <div style="height:100%;"
                 v-if="index == 5">
              <temperatureSheet></temperatureSheet>
            </div>
            <div style="height:100%;"
                 v-if="index == 6">
              <NursingRecord></NursingRecord>
            </div>
            <div style="height:100%;"
                 v-if="index == 7">
              <HospitalConsultation></HospitalConsultation>
            </div>
            <div style="height:100%;"
                 v-if="index == 8">
              <Surgery></Surgery>
            </div>
          </van-tab>
        </van-tabs>
      </template>
    </ZKPage>

    <!--    <van-cell icon="success" v-for="item in list" :key="item" :title="item" />-->
  </div>
</template>

<script>
import {getMobileDoctor} from 'api/mob_doctor.js'
import PatientPage from '../mob/PatientPage'
import LongMedical from '../mob/LongMedical'
import DiagnosticEntry from '../mob/DiagnosticEntry'
import InspectionRport from '../mob/InspectionRport'
import TemporaMedical from '../mob/TemporaMedical'
import MedicalRecord from '../mob/MedicalRecord'
import ExamineReport from '../mob/ExamineReport'
import temperatureSheet from '../mob/temperatureSheet'
import NursingRecord from '../mob/NursingRecord'
import HospitalConsultation from '../mob/HospitalConsultation'
import Surgery from '../mob/Surgery'
import NavBar from '@/components/common/nav-bar'
import ZKPage from '@/components/common/zk-page'

export default {
  data() {
    return {
      active: 0,
      activeNames: ['0'],
      patientData: [],
      list: [
        {name: 1, label: '诊断录入'},
        {name: 2, label: '长期医嘱'},
        {name: 3, label: '临时医嘱'},
        {name: 4, label: '病历'},
        {name: 5, label: '报告信息'},
        {name: 6, label: '体温单'},
        {name: 7, label: '护理记录单'},
        {name: 8, label: '会诊'},
        {name: 9, label: '手术'}
      ],
      patientName: ''
    }
  },
  filters: {
    exChangeMarry(item) {
      if (item == 1) return '已婚'
      else if (item == 2) return '未婚'
      else return '未知'
    }
  },
  components: {
    PatientPage,
    DiagnosticEntry,
    InspectionRport,
    LongMedical,
    TemporaMedical,
    MedicalRecord,
    ExamineReport,
    temperatureSheet,
    NursingRecord,
    HospitalConsultation,
    Surgery,
    NavBar,
    ZKPage
  },
  computed: {},

  mounted() {
    this.getMobileDoctor()
  },

  methods: {
    goToPage() {
      this.$router.go(-1)
    },
    clickcurrent(name, title) {
      this.active = name
    },
    getMobileDoctor() {
      getMobileDoctor({uri: '/api/v1/his/getHisPatById', patId: this.$store.getters.patId}).then(res => {
        console.log(res, 'this.patientData')
        if (this.patientData) {
          this.patientData = res.data
          this.$store.commit('SET_PATIENT', this.patientData)
          this.patientName = this.$store.getters.patient.patName
        }
      })
    },
    getSex(sex) {
      if (sex == 1) {
        return '男'
      } else {
        return '女'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
#modycollapse {
  /deep/.van-cell__right-icon {
    margin-left: 50%;
  }
}

.patientPage {
  width: 100%;
  height: 100%;
  font-size: 0.4rem;

  .base-info {
    width: 100%;

    .base-info-title {
      width: 100%;
      height: 0.8rem;
      line-height: 0.8rem;
      color: $themeColor;
    }

    .base-info-content {
      width: 96%;
      margin: 0 auto;

      .base-content-top {
        display: flex;
        line-height: 0.6rem;
        width: 100%;
        margin: 0.2rem 0;

        div {
          width: 33%;
        }
      }

      .base-content-bottom {
        display: flex;
        text-align: center;
        line-height: 0.6rem;
        margin: 0.2rem 0;
        width: 100%;

        div {
        }

        a {
          color: $themeColor !important;
        }
      }
    }
  }
}
.app-container {
  .warpper {
    padding: 12px;
    background: #fff;
    .demo-home__title {
      margin: 0 0 6px;
      font-size: 32px;
      .demo-home__title img,
      .demo-home__title span {
        display: inline-block;
        vertical-align: middle;
      }
      img {
        width: 32px;
      }
      span {
        margin-left: 16px;
        font-weight: 500;
      }
    }
    .demo-home__desc {
      margin: 0 0 20px;
      color: rgba(69, 90, 100, 0.6);
      font-size: 14px;
    }
  }
}
</style>

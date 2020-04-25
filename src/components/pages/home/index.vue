<template>
  <ZKPage :header="true"
          :container="true">
    <template slot="header">
      <NavBar title=""
              bgColor="rgb(0,121,254)"
              @onClickLeft="goToPage()"
              left-arrow />
               <md-tab-bar v-model="current"
                    :items="items"
                    :maxLength="5" />
    </template>
    <template slot="container">
      <div class="md-example-child md-example-child-tabs md-example-child-tab-bar-2">
        <div v-if="current == 1">
          <!-- 诊断录入  start -->
          <DiagnosticEntry></DiagnosticEntry>
          <!-- 诊断录入  end -->
        </div>
        <div v-if="current == 2">
          <!-- 检查报告  start -->
          <InspectionRport></InspectionRport>
          <!-- 检查报告  end -->
        </div>
        <div v-if="current == 3">
          <!-- 检验报告  start -->
          <ExamineReport></ExamineReport>
          <!-- 检验报告  end -->
        </div>
        <div v-if="current == 4">
          <!-- 患者界面  start -->
          <PatientPage></PatientPage>
          <!-- 患者界面  end -->
        </div>
        <div v-if="current == 5">
          <!-- 病历  start -->
          <MedicalRecord></MedicalRecord>
          <!-- 病历  end -->
        </div>
        <div v-if="current == 6">
          <!-- 院内会诊  start -->
          <HospitalConsultation></HospitalConsultation>
          <!-- 院内会诊  end -->
        </div>
        <div v-if="current == 7">
          <!-- 临时医嘱  start -->
          <TemporaMedical></TemporaMedical>
          <!-- 临时医嘱  end -->
        </div>
        <div v-if="current == 8">
          <!-- 长期医嘱  start -->
          <LongMedical></LongMedical>
          <!-- 长期医嘱  end -->
        </div>
        
      </div>
    </template>
  </ZKPage>
</template>

<script>
import DiagnosticEntry from '@/components/pages/doctor/DiagnosticEntry'
import InspectionRport from '@/components/pages/doctor/InspectionRport'
import ExamineReport from '@/components/pages/doctor/ExamineReport'
import PatientPage from '@/components/pages/patient/PatientPage'
import MedicalRecord from '@/components/pages/doctor/MedicalRecord'
import HospitalConsultation from '@/components/pages/doctor/HospitalConsultation'
import TemporaMedical from '@/components/pages/doctor/TemporaMedical'
import LongMedical from '@/components/pages/doctor/LongMedical'
import NavBar from "@/components/common/nav-bar";
import ZKPage from "@/components/common/zk-page";

export default {
  name: "home",
  data() {
    return {
      current: 1,
      
      items: [
        { name: 1, label: "诊断录入" },
        { name: 2, label: "检验报告" },
        { name: 3, label: "检查报告" },
        { name: 4, label: "患者界面" },
        { name: 5, label: "病历" },
        { name: 6, label: "院内会诊" },
        { name: 7, label: "临时医嘱" },
        { name: 8, label: "长期医嘱" }
      ]
    };
  },
  filters: {
    mainState(value) {
      console.log(value);
    }
  },
  computed: {},
  components: {
    ZKPage,
    NavBar,
    DiagnosticEntry,
    InspectionRport,
    ExamineReport,
    PatientPage,
    MedicalRecord,
    HospitalConsultation,
    TemporaMedical,
    LongMedical
  },
  mounted() {
    
  },
  watch: {},

  methods: {
    
  }
};
</script>
<style lang='scss'>
.a {
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
}


</style>

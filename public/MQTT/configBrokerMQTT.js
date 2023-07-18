topicPub = "iotgateway/write";		// topic to public to
topicSub = "iotgateway";            // topic to subscriber to

Manu_Auto = "TRAM.Tram10.HMI_AUTO";
Stop = "TRAM.Tram10.HMI_STOP";
Start = "TRAM.Tram10.HMI_START";
Reset = "TRAM.Tram10.HMI_RESET";
// Manu_Auto = "TRAM.Tram6.Auto/man";
// Stop = "TRAM.Tram6.Stop";
// Start = "TRAM.Tram6.Start";
// Reset = "TRAM.Tram6.Reset";

Tram4_Reset = "TRAM.Tram4.RESET";
Tram4_Start = "TRAM.Tram4.START";
Tram4_2B1 = "TRAM.Tram4.2B1_CB_Phoi";
Tram4_2B2 = "TRAM.Tram4.2B2_CB_Gapvat";
Tram4_2B3 = "TRAM.Tram4.2B3_CB_Tramsau";
Tram4_2B4 = "TRAM.Tram4.2B4_CB_Trunggian";
Tram4_2B5 = "TRAM.Tram4.2B5_CB_XLD_Duoi";
Tram4_2B6 = "TRAM.Tram4.2B6_CB_XLD_Tren";
Tram4_2B7 = "TRAM.Tram4.2B7_CB_Phoi_den";
Tram4_3PV1 = "TRAM.Tram4.3PV1_XLN_Trai";
Tram4_3PV2 = "TRAM.Tram4.3PV2_XLN_Phai";
Tram4_3PV3 = "TRAM.Tram4.3PV3_XLD";
Tram4_3PV4 = "TRAM.Tram4.3PV4_Tay_gap";

Tram5_Reset = "TRAM.Tram5.Reset";
Tram5_Start = "TRAM.Tram5.Start";
Tram5_2B1 = "TRAM.Tram5.2B1";
Tram5_2B2 = "TRAM.Tram5.2B2";
Tram5_2B3 = "TRAM.Tram5.2B3";
Tram5_2B5 = "TRAM.Tram5.2B5";
Tram5_3PV1 = "TRAM.Tram5.SLN1";
Tram5_3PV2 = "TRAM.Tram5.SLN2";
Tram5_3DCM1 = "TRAM.Tram5.DC_BT";

Tram6_Reset = "TRAM.Tram6.Reset";
Tram6_Start = "TRAM.Tram6.Start";
Tram6_2B1 = "TRAM.Tram6.CB_Phoi_2B1";
Tram6_2B2 = "TRAM.Tram6.CB_Chan_2B2";
Tram6_2B3 = "TRAM.Tram6.CB_Cuoi_HT";
Tram6_2B4 = "TRAM.Tram6.CTHT_Khong_gat_2B5";
Tram6_2B5 = "TRAM.Tram6.CTHT_Gat_2B4";
Tram6_3PV1 = "TRAM.Tram6.Xylanh_Chan";
Tram6_3M1 = "TRAM.Tram6.Dong_co_Bang_tai";

payload_start = `[{"id":"${Start}","v":true}]`;
payload_reset = `[{"id":"${Reset}","v":true}]`;
payload_stop  = `[{"id":"${Stop}","v":true}]`;

payload_start_false = `[{"id":"${Start}","v":false}]`;
payload_reset_false = `[{"id":"${Reset}","v":false}]`;
payload_stop_false  = `[{"id":"${Stop}","v":false}]`;

// payload_Manu  = `[{"id":"${Manu_Auto}","v":false},{"id":"Channel1.Device1.auto_mau","v":false}]`;
// payload_Auto  = `[{"id":"${Manu_Auto}","v":true},{"id":"Channel1.Device1.auto_mau","v":true}]`;
payload_Manu  = `[{"id":"${Manu_Auto}","v":false}]`;
payload_Auto  = `[{"id":"${Manu_Auto}","v":true}]`;
const Info = require('../models/info');
const ChooseSection = require('../models/chooseSection');
const HelpSection = require('../models/helpSection');
exports.createDefaultData = async () => {
    await exports.createInfoData();
    await exports.createHelpSectionData();
    await exports.createChooseSectionData();
}
exports.createInfoData=async ()=>{
    try {
        const infoCount = await Info.countDocuments();
        if (infoCount === 0) {
            const defaultData= [
              { address: 'Default Address', email: 'Default@example.com', phone: '123-456-7890'},
            ];
        
            await Info.create(defaultData);
        }
        }catch (error) {
            console.error('Error creating default Info:', error);
          }
}
exports.createHelpSectionData=async ()=>{
    try {
        const helpSectionCount = await HelpSection.countDocuments();
        if (helpSectionCount === 0) {
            const defaultHelpData= [
              { title: 'We Help You Make Modern Interior Design',
             subTitle: 'Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada Donec vitae odio quis nisl dapibus malesuada Donec vitae odio quis nisl dapibus malesuada Donec vitae odio quis nisl dapibus malesuada Donec vitae odio quis nisl dapibus malesuada', 
             image1: 'https://img.freepik.com/free-photo/mid-century-modern-living-room-interior-design-with-monstera-tree_53876-129804.jpg',
             image2: 'https://specials-images.forbesimg.com/imageserve/63ee96ebff0dadf0a54144a5/Erik-Leather-Wing-Chair---best-furniture-store-online/960x0.jpg?cropX1=0&cropX2=1060&cropY1=0&cropY2=961',
             image3: 'https://t4.ftcdn.net/jpg/03/71/92/67/360_F_371926762_MdmDMtJbXt7DoaDrxFP0dp9Nq1tSFCnR.jpg'},
            ];
        
            await HelpSection.create(defaultHelpData);
        }
        }catch (error) {
            console.error('Error creating default Help Section Data:', error);
          }
}
exports.createChooseSectionData=async ()=>{
    try {
        const chooseSectionCount = await ChooseSection.countDocuments();
        if (chooseSectionCount === 0) {
            const defaultChooseData= [
              { title: 'We Help You Make Modern Interior Design',
             subTitle: 'Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada Donec vitae odio quis nisl dapibus malesuada Donec vitae odio quis nisl dapibus malesuada Donec vitae odio quis nisl dapibus malesuada Donec vitae odio quis nisl dapibus malesuada', 
             image: 'https://t4.ftcdn.net/jpg/03/71/92/67/360_F_371926762_MdmDMtJbXt7DoaDrxFP0dp9Nq1tSFCnR.jpg'},
            ];
        
            await ChooseSection.create(defaultChooseData);
        }
        }catch (error) {
            console.error('Error creating default choose Section Data:', error);
          }
}
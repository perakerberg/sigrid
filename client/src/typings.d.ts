/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}


declare var responsiveVoice : ResponsiveVoice;

interface ResponsiveVoice{
    speak(text:string);
    speak(text:string, voiceName : string);
    speak(text:string, voiceName : string, config : any);
}

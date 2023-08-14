import React, { useEffect, useState } from 'react'
import DrawerAppBar from '../../components/Home/Navbar'
import Navbar from '../../components/Home/Navbar'
import { useLocation, useNavigate } from 'react-router'
import Options from '../../components/Home/Options'
import "../../css/Home.css"
import Despegable from '../../components/Home/Despegable'
import BoxWork from '../../components/Home/BoxWork'
import { useForm } from '../../hooks/useForm'
import LimitCalendar from '../../components/Home/LimitCalendar'
import SelectDayOptional from '../../components/Home/SelectDayOptional'
import NotificacionSelect from '../../components/Home/NotificacionSelect'
import Swal from "sweetalert2"
import withReactContent from 'sweetalert2-react-content'
import Repit from '../../components/Home/Repit'
import axios from 'axios'
import TodoContainer from '../../components/Home/TodoContainer'
import Sucesfully from '../../components/Home/Sucesfully'
import Notificacion from '../../components/Home/Notificacion'
import NotificacionContainer from '../../components/Home/NotificacionContainer'

const Home = () => {
  const location=useLocation()
  if(!location.state){
    localStorage.removeItem("acessToken")
  }
  const id=location.state?location.state.id:null
 


 localStorage.setItem("id",`${id}`)
  const navigate=useNavigate()

  const [despegable,setDespegable]=useState({despegablenav:false,showadd:false,showcalendar:false,venciment:null,
    showcalendaroption:false,shownotifacion:false,aviso:null,showrepition:false
    ,repit:null,todaytodo:[],mapeartodo:[],mapearfinish:[],complete:false,
    sectionimportantes:false,sectionsplaneados:false,sectionstareas:false,miday:true,
    importantstodos:[],planeadostodos:[],todos:[],searchnav:"",encontrado:[],vencidos:[]})
  useEffect(()=>{
   
  fetchalltodos()
  mapearentodo()
  mapearfinish()
  fetchimportants()
  fetchplaneados()
 mapeartodos()
  },[despegable.todaytodo])
  const fetchalltodos= ()=>{
    return  axios.post("http://localhost:3001/getaalforusers",{
      
    id:reciveslocalstorage()
  }).then((res)=>{
  
    setDespegable(x=>{return{...x,todaytodo:res.data}})
    
  })
  }

 const mapearentodo=()=>{
  setDespegable(x=>{return{...x,mapeartodo:[...x.todaytodo].filter(x=>new Date().getDay() == new Date(x.fechavencimiento).getDay() && new Date().getFullYear()==new Date(x.fechavencimiento).getFullYear() && new Date().getMonth()==new Date(x.fechavencimiento).getMonth() && x.terminado=='no')}})
       
 }
 const mapearfinish=()=>{
  setDespegable(x=>{return{...x,mapearfinish:[...x.todaytodo].filter(y=>y.terminado=='si')}})
 }
  const reciveslocalstorage=()=>{
    return parseInt(localStorage.getItem("id"))
  }
  const changedespegable=()=>{
    setDespegable(x=>{return{...x,despegablenav:!x.despegablenav}})
  }
  const {addwork,onInputChange,onResetForm}=useForm({
    addwork:null
  })
  const handlesubmit=()=>{
    console.log(despegable.repit)
    if(!despegable.venciment){
      sweet("La todo necesita una fecha de vencimiento")
    }else{
      axios.post("http://localhost:3001/insertTodo",{
        nametodo:addwork,fechavencimiento: dateaddto(despegable.venciment) ,notificacion:changehour(dateaddto(despegable.aviso)),repetir:dateaddto(despegable.repit),idusers:reciveslocalstorage(),importante:null,terminado:"no"
      })
      setDespegable(x=>{return {...x,venciment:null,aviso:null,repit:null}})
      handelclickswhoradd()
    }
  }
  const dateaddto=(date)=>{
    switch(date){
      case "Hoy":
        return new Date()
      case "Diariamente":
        return new Date()
      case "Semanal"  :
          return new Date(new Date().setDate(new Date().getDate()+7))
      case "Mensualmente"  :
            return new Date(new Date().setDate(new Date().getDate()+26))
      case "Mañana":
        return new Date(new Date().setDate(new Date().getDate()+1))
      case "Semana próxima" :
        return new Date(new Date().setDate(new Date().getDate()+7))
      case null:
        return null
      default:
        return new Date(new Date(date).setDate(new Date(date).getDate()+1))    
      
    }

  }
  const changehour=(time)=>{
    if(time){
      const numberoofmili=time.getTime()
    let addMlSeconds = 60 * 60000;
    addMlSeconds*=3
    return new Date(numberoofmili+addMlSeconds)
    }else{
      return null
    }
  
  }
  const sessionClose=()=>{
      localStorage.removeItem("acessToken")
      navigate("/",{
        replace:true
      })
  }
  const handelclickswhoradd=()=>{
    setDespegable(x=>{return{...x,showadd:!x.showadd}})
  }
  const showday=()=>{
    setDespegable(x=>{return{...x,showcalendar:!x.showcalendar}})
  }
  const selecttoday=()=>{
    setDespegable(x=>{return{
      ...x,
      venciment:"Hoy"
    }})
    showday()
  }
  const selecttomorrow=()=>{
    setDespegable(x=>{return{
      ...x,
      venciment:"Mañana"

    }})
    showday()
  }
  const selectnextweek=()=>{
    setDespegable(x=>{return{
      ...x,
      venciment:"Semana próxima"

    }})
    showday()
  }
  const deletedate=()=>{
    setDespegable(x=>{return{
      ...x,
      venciment:null
    }})
    showday()
  }
  const optionalday=()=>{
   showcalendarop()
    showday()
  }
  const showcalendarop=()=>{
    setDespegable(x=>{return{...x,showcalendaroption:!x.showcalendaroption}})
  }
  const selectdDate=(e)=>{
    const {  value } = e.target;
    if(new Date(value)<new Date()){
      sweet("La fecha debe ser mayor a la fecha actual")
    }else{
      setDespegable(x=>{return{...x,venciment:value}})
    }
    
    
  }

  const shownotificacion=()=>{
    setDespegable(x=>{return{...x,shownotifacion:!x.shownotifacion}})
  }
  const savedate=()=>{
    if(new Date(despegable.venciment)<new Date())
    {
    sweet("La fecha debe ser mayor a la fecha actual")
    setDespegable(x=>{return{...x,venciment:null}})
    }else{
      showcalendarop()
    }
 
   
  }
  const todayalarm=()=>{
    setDespegable(x=>{return{...x,aviso:"Hoy"}})
    shownotificacion()
  }
  const tomorrowalarm=()=>{
    setDespegable(x=>{return{...x,aviso:"Mañana"}})
    shownotificacion()
  }
  const nextweekalarm=()=>{
    setDespegable(x=>{return{...x,aviso:"Semana próxima"}})
    shownotificacion()
  }
  const deletedatenotifi=()=>{
    setDespegable(x=>{return{...x,aviso:null}})
    shownotificacion()
  }
  const sweet=  (name)=>{
    const MySwal=withReactContent(Swal)
     MySwal.fire({
       title:<strong>Error</strong>,
       html:<i>{name}</i>,
       icon:"error",
       confirmButtonColor:"#0F9BF2 "
       
     })
 }
 const showrepition=()=>{
  setDespegable(x=>{return{...x,showrepition:!x.showrepition}})
 }
 const selectdiar=()=>{
  setDespegable(x=>{return{...x,repit:"Diariamente"}})
  showrepition()
 }
 const selectweek=()=>{
  setDespegable(x=>{return{...x,repit:"Semanal"}})
  showrepition()
 }

 const selectmoth=()=>{
  setDespegable(x=>{return{...x,repit:"Mensualmente"}})
  showrepition()
 }
 const deleterepetion=()=>{
  setDespegable(x=>{return{...x,repit:null}})
  showrepition()
 }
 const showcomplete=()=>{
  setDespegable(x=>{return{...x,complete:!x.complete}})
 }
 const showcompelteawwls=()=>{
  setDespegable(x=>{return{...x,complete:true}})
 }
 const changetomyday=()=>{
  setDespegable(x=>{return {...x, sectionimportantes:false,sectionsplaneados:false,sectionstareas:false,miday:true}})
 }
 const changetoimportans=()=>{
  setDespegable(x=>{return {...x, sectionimportantes:true,sectionsplaneados:false,sectionstareas:false,miday:false}})
 }
 const changetoplans=()=>{
  setDespegable(x=>{return {...x, sectionimportantes:false,sectionsplaneados:true,sectionstareas:false,miday:false}})
 }
 const changesectiontareas=()=>{
  setDespegable(x=>{return {...x, sectionimportantes:false,sectionsplaneados:false,sectionstareas:true,miday:false}})
 }
 const fetchimportants=()=>{
  setDespegable(x=>{return{...x,importantstodos:[...x.todaytodo].filter(y=>y.importante=='si' && y.terminado=='no')}})
 }
 const fetchplaneados=()=>{
  setDespegable(x=>{return{...x,planeadostodos:[...x.todaytodo].filter(x=> new Date()<new Date(x.fechavencimiento)&& x.terminado=='no' )}})
 }
 const mapeartodos=()=>{
  setDespegable(x=>{return{...x,todos:[...x.todaytodo].filter(y=>y.terminado=='no')}})
 }
 const searchelement=(e)=>{
  const {name,value}=e.target
  setDespegable(x=>{return{...x,searchnav:value}})
  
  find(despegable.searchnav)
  console.log(despegable.encontrado)
 

 }
 const find=(name)=>{
  const result=despegable.todaytodo.filter(x=>{
    if(x.nametodo.toLowerCase().includes(name.toLowerCase())){
      return x
    }
  })
  setDespegable(x=>{return{...x,encontrado:result}})

 }
 const vencidos=()=>{
     setDespegable(x=>{return{...x,mapeartodo:[...x.todaytodo].filter(x=>new Date().getDay() == new Date(x.fechavencimiento).getDay() && new Date().getFullYear()==new Date(x.fechavencimiento).getFullYear() && new Date().getMonth()==new Date(x.fechavencimiento).getMonth() && new Date().getHours() == new Date(x.fechavencimiento).getHours() && x.terminado=='no')}})
 }

  return (
    <div>
    <Navbar sessionClose={sessionClose} handlechange={searchelement} ></Navbar>

    { despegable.miday?
    
   <>
    <Options color={despegable.searchnav?'bluetwo':''} date={new Date()} show={despegable.despegablenav} shownMenu={changedespegable} iconname={despegable.searchnav?'':'sunny'} tittle={despegable.searchnav?`Buscando ${despegable.searchnav}`:'Mi dia'}></Options>
    <Despegable handleclickmyday={changetomyday} handleclickmyimportant={changetoimportans} handleclickmyplaned={changetoplans} handleclickwork={changesectiontareas} show={despegable.despegablenav}></Despegable>
    <BoxWork handlesubmit={handlesubmit} despegablenav={despegable.despegablenav} optionselectrepeat={despegable.repit} showrepit={showrepition} optionselectnotifi={despegable.aviso} shownotificacion={shownotificacion} optionselect={despegable.venciment} showday={showday} handleclick={handelclickswhoradd} addwork={addwork} onInputChange={onInputChange} add={despegable.showadd} ></BoxWork>
     <LimitCalendar despegablenav={despegable.despegablenav} optionalday={optionalday} selecttomorrow={selecttomorrow} selectnextweek={selectnextweek} deletedate={deletedate} optionselect={despegable.venciment} selecttoday={selecttoday}  showcalendar={despegable.showcalendar}></LimitCalendar>
     <SelectDayOptional noempty={despegable.venciment} savedate={savedate} selectdDate={selectdDate} showoptioncalendar={despegable.showcalendaroption}></SelectDayOptional>
     <NotificacionSelect deletedate={deletedatenotifi} todayalarm={todayalarm} tomorrowalarm={tomorrowalarm} nextweekalarm={nextweekalarm} showoptionnoticacion={despegable.shownotifacion} optionselect={despegable.aviso}></NotificacionSelect>
     <Repit optionselect={despegable.repit} deleterepetion={deleterepetion} selectmoth={selectmoth} selectdiar={selectdiar} selectweek={selectweek} showrepition={despegable.showrepition} ></Repit>
     <TodoContainer showcompelteawwls={showcompelteawwls} todos={despegable.searchnav? despegable.encontrado:despegable.mapeartodo} despegablenav={despegable.despegablenav}></TodoContainer>
     <Sucesfully showcomplete={showcomplete} complete={despegable.complete} finish={despegable.mapearfinish} despegablenav={despegable.despegablenav}></Sucesfully>
    </>
    :<></>
     }
       { despegable.sectionimportantes?
       <>
       <Options color={despegable.searchnav?'bluetwo':''}   show={despegable.despegablenav} shownMenu={changedespegable}  iconname={despegable.searchnav?'':'star'} tittle={despegable.searchnav?`Buscando ${despegable.searchnav}`:'Importante'} ></Options>

       <Despegable handleclickmyday={changetomyday} handleclickmyimportant={changetoimportans} handleclickmyplaned={changetoplans} handleclickwork={changesectiontareas} show={despegable.despegablenav}></Despegable>
    <BoxWork handlesubmit={handlesubmit} despegablenav={despegable.despegablenav} optionselectrepeat={despegable.repit} showrepit={showrepition} optionselectnotifi={despegable.aviso} shownotificacion={shownotificacion} optionselect={despegable.venciment} showday={showday} handleclick={handelclickswhoradd} addwork={addwork} onInputChange={onInputChange} add={despegable.showadd} ></BoxWork>
     <LimitCalendar despegablenav={despegable.despegablenav} optionalday={optionalday} selecttomorrow={selecttomorrow} selectnextweek={selectnextweek} deletedate={deletedate} optionselect={despegable.venciment} selecttoday={selecttoday}  showcalendar={despegable.showcalendar}></LimitCalendar>
     <SelectDayOptional noempty={despegable.venciment} savedate={savedate} selectdDate={selectdDate} showoptioncalendar={despegable.showcalendaroption}></SelectDayOptional>
     <NotificacionSelect deletedate={deletedatenotifi} todayalarm={todayalarm} tomorrowalarm={tomorrowalarm} nextweekalarm={nextweekalarm} showoptionnoticacion={despegable.shownotifacion} optionselect={despegable.aviso}></NotificacionSelect>
     <Repit optionselect={despegable.repit} deleterepetion={deleterepetion} selectmoth={selectmoth} selectdiar={selectdiar} selectweek={selectweek} showrepition={despegable.showrepition} ></Repit>
     <TodoContainer showcompelteawwls={showcompelteawwls} todos={despegable.searchnav? despegable.encontrado:despegable.importantstodos} despegablenav={despegable.despegablenav}></TodoContainer>
     <Sucesfully showcomplete={showcomplete} complete={despegable.complete} finish={despegable.mapearfinish} despegablenav={despegable.despegablenav}></Sucesfully>
       </>
       :<></>
     }
      { despegable.sectionsplaneados?
      <>
      
    
      <Options color={despegable.searchnav?'bluetwo':''}   show={despegable.despegablenav} shownMenu={changedespegable} iconname={despegable.searchnav?'':'calendar_month'} tittle={despegable.searchnav?`Buscando ${despegable.searchnav}`:'Planeado'} ></Options>
      <Despegable handleclickmyday={changetomyday} handleclickmyimportant={changetoimportans} handleclickmyplaned={changetoplans} handleclickwork={changesectiontareas} show={despegable.despegablenav}></Despegable>
    <BoxWork handlesubmit={handlesubmit} despegablenav={despegable.despegablenav} optionselectrepeat={despegable.repit} showrepit={showrepition} optionselectnotifi={despegable.aviso} shownotificacion={shownotificacion} optionselect={despegable.venciment} showday={showday} handleclick={handelclickswhoradd} addwork={addwork} onInputChange={onInputChange} add={despegable.showadd} ></BoxWork>
     <LimitCalendar despegablenav={despegable.despegablenav} optionalday={optionalday} selecttomorrow={selecttomorrow} selectnextweek={selectnextweek} deletedate={deletedate} optionselect={despegable.venciment} selecttoday={selecttoday}  showcalendar={despegable.showcalendar}></LimitCalendar>
     <SelectDayOptional noempty={despegable.venciment} savedate={savedate} selectdDate={selectdDate} showoptioncalendar={despegable.showcalendaroption}></SelectDayOptional>
     <NotificacionSelect deletedate={deletedatenotifi} todayalarm={todayalarm} tomorrowalarm={tomorrowalarm} nextweekalarm={nextweekalarm} showoptionnoticacion={despegable.shownotifacion} optionselect={despegable.aviso}></NotificacionSelect>
     <Repit optionselect={despegable.repit} deleterepetion={deleterepetion} selectmoth={selectmoth} selectdiar={selectdiar} selectweek={selectweek} showrepition={despegable.showrepition} ></Repit>
     <TodoContainer showcompelteawwls={showcompelteawwls} todos={despegable.searchnav? despegable.encontrado:despegable.planeadostodos} despegablenav={despegable.despegablenav}></TodoContainer>
     <Sucesfully showcomplete={showcomplete} complete={despegable.complete} finish={despegable.mapearfinish} despegablenav={despegable.despegablenav}></Sucesfully>
      </>
      :<></>
     }
     { despegable.sectionstareas?
     <>
     <Options color={despegable.searchnav?'bluetwo':''}  date={new Date()} show={despegable.despegablenav} shownMenu={changedespegable}  iconname={despegable.searchnav?'':'home'} tittle={despegable.searchnav?`Buscando ${despegable.searchnav}`:'Tareas'}></Options>
     <Despegable handleclickmyday={changetomyday} handleclickmyimportant={changetoimportans} handleclickmyplaned={changetoplans} handleclickwork={changesectiontareas} show={despegable.despegablenav}></Despegable>
    <BoxWork handlesubmit={handlesubmit} despegablenav={despegable.despegablenav} optionselectrepeat={despegable.repit} showrepit={showrepition} optionselectnotifi={despegable.aviso} shownotificacion={shownotificacion} optionselect={despegable.venciment} showday={showday} handleclick={handelclickswhoradd} addwork={addwork} onInputChange={onInputChange} add={despegable.showadd} ></BoxWork>
     <LimitCalendar despegablenav={despegable.despegablenav} optionalday={optionalday} selecttomorrow={selecttomorrow} selectnextweek={selectnextweek} deletedate={deletedate} optionselect={despegable.venciment} selecttoday={selecttoday}  showcalendar={despegable.showcalendar}></LimitCalendar>
     <SelectDayOptional noempty={despegable.venciment} savedate={savedate} selectdDate={selectdDate} showoptioncalendar={despegable.showcalendaroption}></SelectDayOptional>
     <NotificacionSelect deletedate={deletedatenotifi} todayalarm={todayalarm} tomorrowalarm={tomorrowalarm} nextweekalarm={nextweekalarm} showoptionnoticacion={despegable.shownotifacion} optionselect={despegable.aviso}></NotificacionSelect>
     <Repit optionselect={despegable.repit} deleterepetion={deleterepetion} selectmoth={selectmoth} selectdiar={selectdiar} selectweek={selectweek} showrepition={despegable.showrepition} ></Repit>
     <TodoContainer showcompelteawwls={showcompelteawwls} todos={despegable.searchnav? despegable.encontrado: despegable.todos} despegablenav={despegable.despegablenav}></TodoContainer>
     <Sucesfully showcomplete={showcomplete} complete={despegable.complete} finish={despegable.mapearfinish} despegablenav={despegable.despegablenav}></Sucesfully>
     </>
     :<></>
     }
    <NotificacionContainer visibility={despegable.vencidos} ></NotificacionContainer>


    </div>
  )
}


export default Home
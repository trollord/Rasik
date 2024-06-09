import { useLocation } from 'react-router-dom';
import { ServicePage } from '.';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function ServicePageWrapper(){
    const servicesList = ['print-media','e-commerce-solution','radio-fm','creative','digital-marketing', 'social-media-marketing'];
    const [showServicePage , setShowServicePage] = useState<boolean>(false);
    const location = useLocation();
    const navigate = useNavigate()

    const path = location.pathname.split('/').filter(str => str.length)[1];

  useEffect(() => {
      if(!servicesList.some(actualPath => actualPath === path)){
        navigate('/')
      }{
        setShowServicePage(true)
      }

  },[path])

  return showServicePage ? <ServicePage></ServicePage> : ""


}
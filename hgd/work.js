
      const $kim = document.querySelector('.kim');
      $kim?.addEventListener('click', click_f, true);
      const $detail = document.querySelector('.detail');
      const $메뉴체크 = document.querySelector('.메뉴체크');
  
      const $tab1 = document.querySelector('.tabs');
      const $tab2 = document.querySelector('.tabs2');
      const $tab3 = document.querySelector('.tabs3');
      const $tab4 = document.querySelector('.ccc');
      const $tab5 = document.querySelector('.ddd');
  
  
      const $Ulsan = document.querySelector('.Ulsan'); 
      const $Busan = document.querySelector('.Busan');       
      const $Seoul = document.querySelector('.Seoul');       
  
      
  
      function click_f(evt) {      
        const $parent = document.querySelector('.kim');
        const $toMove = evt.target.closest('a');
        
        if (evt.target.matches('.detail')) {
          if ($메뉴체크.checked == true) {
            $detail.addEventListener('click', (evt) => {
              $메뉴체크.checked = false;
            });
          } else if ($메뉴체크.checked == false) {
            $detail.addEventListener('click', (evt) => {
              $메뉴체크.checked = true;
            });
          }
        }
        //---------------------------------------
        
        if(evt.target.matches('.tabs')){                    
          $toMove.addEventListener('click', (evt) => {                                
            document.getElementById('selectArea1').innerHTML=$toMove.textContent;
            document.getElementById('btn tab2').click();          
          });                           
          if(evt.target.matches('.Ulsan')){
            console.log($tab4.textContent);           
              const $liEle = makeElement('div', { 'class':'cont', 'id':'tab2'},
                           makeElement('a',{'href':'javascript:void(0)', 'class':'tabs2 cod21'}, '울산중구'),
                           makeElement('a',{'href':'javascript:void(0)', 'class':'tabs2 cod22'}, '울산동구'),
                           makeElement('a',{'href':'javascript:void(0)', 'class':'tabs2 cod23'}, '울산남구'),
                           makeElement('a',{'href':'javascript:void(0)', 'class':'tabs2 cod24'}, '울산북구')                         
                         );
                         $tab4.appendChild($liEle);
                         $kim.replaceChild($liEle, $tab4);
            }
            if(evt.target.matches('.Busan')){
            console.log($tab4.textContent);           
              const $liEle = makeElement('div', { 'class':'cont', 'id':'tab2'},
                           makeElement('a',{'href':'javascript:void(0)', 'class':'tabs2 cod31'}, '부산중구'),
                           makeElement('a',{'href':'javascript:void(0)', 'class':'tabs2 cod32'}, '부산동구'),
                           makeElement('a',{'href':'javascript:void(0)', 'class':'tabs2 cod33'}, '부산남구'),
                           makeElement('a',{'href':'javascript:void(0)', 'class':'tabs2 cod34'}, '부산북구')                         
                         );
                         $tab4.appendChild($liEle);
                         $kim.replaceChild($liEle, $tab4);
            }
            if(evt.target.matches('.Seoul')){
            console.log($tab4.textContent);           
              const $liEle = makeElement('div', { 'class':'cont', 'id':'tab2'},
                           makeElement('a',{'href':'javascript:void(0)', 'class':'tabs2 cod41'}, '서울중구'),
                           makeElement('a',{'href':'javascript:void(0)', 'class':'tabs2 cod42'}, '서울동구'),
                           makeElement('a',{'href':'javascript:void(0)', 'class':'tabs2 cod43'}, '서울남구'),
                           makeElement('a',{'href':'javascript:void(0)', 'class':'tabs2 cod44'}, '서울북구')                         
                         );
                         $tab4.appendChild($liEle);
                         $kim.replaceChild($liEle, $tab4);
            }
          }   
          
        
        if(evt.target.matches('.tabs2')){        
          $toMove.addEventListener('click', (evt) => {                  
              document.getElementById('selectArea2').innerHTML=$toMove.textContent;      
            document.getElementById('btn tab3').click();
            });  
            if(evt.target.matches('.cod21')){
            console.log($tab4.textContent);           
              const $liEle = makeElement('div', { 'class':'cont', 'id':'tab3'},
                           makeElement('a',{'href':'javascript:void(0)', 'class':'tabs3 cod201'}, '울산중구1번지'),
                           makeElement('a',{'href':'javascript:void(0)', 'class':'tabs3 cod202'}, '울산중구2번지'),
                           makeElement('a',{'href':'javascript:void(0)', 'class':'tabs3 cod203'}, '울산중구3번지'),
                           makeElement('a',{'href':'javascript:void(0)', 'class':'tabs3 cod204'}, '울산중구4번지')                         
                         );
                         $tab5.appendChild($liEle);
                         $kim.replaceChild($liEle, $tab5);
            }
            if(evt.target.matches('.cod22')){
            console.log($tab4.textContent);           
              const $liEle = makeElement('div', { 'class':'cont', 'id':'tab3'},
                           makeElement('a',{'href':'javascript:void(0)', 'class':'tabs3 cod201'}, '울산동구1번지'),
                           makeElement('a',{'href':'javascript:void(0)', 'class':'tabs3 cod202'}, '울산동구2번지'),
                           makeElement('a',{'href':'javascript:void(0)', 'class':'tabs3 cod203'}, '울산동구3번지'),
                           makeElement('a',{'href':'javascript:void(0)', 'class':'tabs3 cod204'}, '울산동구4번지')                         
                         );
                         $tab5.appendChild($liEle);
                         $kim.replaceChild($liEle, $tab5);
            }
            if(evt.target.matches('.cod23')){
            console.log($tab4.textContent);           
              const $liEle = makeElement('div', { 'class':'cont', 'id':'tab3'},
                           makeElement('a',{'href':'javascript:void(0)', 'class':'tabs3 cod201'}, '울산남구1번지'),
                           makeElement('a',{'href':'javascript:void(0)', 'class':'tabs3 cod202'}, '울산남구2번지'),
                           makeElement('a',{'href':'javascript:void(0)', 'class':'tabs3 cod203'}, '울산남구3번지'),
                           makeElement('a',{'href':'javascript:void(0)', 'class':'tabs3 cod204'}, '울산남구4번지')                         
                         );
                         $tab5.appendChild($liEle);
                         $kim.replaceChild($liEle, $tab5);
            }
            if(evt.target.matches('.cod24')){
            console.log($tab4.textContent);           
              const $liEle = makeElement('div', { 'class':'cont', 'id':'tab3'},
                           makeElement('a',{'href':'javascript:void(0)', 'class':'tabs3 cod201'}, '울산북구1번지'),
                           makeElement('a',{'href':'javascript:void(0)', 'class':'tabs3 cod202'}, '울산북구2번지'),
                           makeElement('a',{'href':'javascript:void(0)', 'class':'tabs3 cod203'}, '울산북구3번지'),
                           makeElement('a',{'href':'javascript:void(0)', 'class':'tabs3 cod204'}, '울산북구4번지')                         
                         );
                         $tab5.appendChild($liEle);
                         $kim.replaceChild($liEle, $tab5);
            }
  
           
          }
        
  
  
        if(evt.target.matches('.tabs3')){
          $toMove.addEventListener('click', (evt) => {
              console.log($toMove.textContent);          
              document.getElementById('selectArea3').innerHTML=$toMove.textContent;       
  
            });          
        }
      }   
  
      const tabList = document.querySelectorAll('.detailmenu .Area li');
      const contents = document.querySelectorAll('.detailmenu .Areabox .cont')
      let activeCont = ''; // 현재 활성화 된 컨텐츠 (기본:#tab1 활성화)
  
      for (var i = 0; i < tabList.length; i++) {
        tabList[i].querySelector('.btn').addEventListener('click', function (e) {
          e.preventDefault();
          for (var j = 0; j < tabList.length; j++) {
            // 나머지 버튼 클래스 제거
            tabList[j].classList.remove('is_on');
  
            // 나머지 컨텐츠 display:none 처리
            contents[j].style.display = 'none';
          }
  
          // 버튼 관련 이벤트
          this.parentNode.classList.add('is_on');
  
          // 버튼 클릭시 컨텐츠 전환
          activeCont = this.getAttribute('href');
          document.querySelector(activeCont).style.display = 'block';
        });
      }
  
       // 여기서부터 내가 쓴 내용임... from 강현
       const $hashtechbox = document.querySelector('.hashtechbox');
      const $input = document.querySelector('.search__input-box');
  
      $hashtechbox.addEventListener("click", handler, false);
  
      function handler(evt){
        if(evt.target.tagName.toLowerCase() != 'p') return;
  
        console.log(evt.target.textContent);
        const pressBtnOfText = evt.target.textContent.toLowerCase();
  
        if($input.value.indexOf(evt.target.textContent) == -1){      
      if($input.value == 0){       
        $input.value = null;
      }
      $input.value += (pressBtnOfText + " ");  
    }
  }

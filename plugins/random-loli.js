let handler = async (m, { conn, text, command }) => {
    let yh = global.loli
    let url = yh[Math.floor(Math.random() * yh.length)]
    conn.sendButton(m.chat, `ʀᴀɴᴅᴏᴍ ʟᴏʟɪ - ɪѕ ᴄᴜᴛᴇ 🥺`.trim(), author, url, [['◀️𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴▶️', `/${command}`]], m)
  }
  handler.command = /^(loli)$/i
  handler.tags = ['anime']
  handler.help = ['loli']
  handler.limit = 1
  export default handler
  
  global.loli = [
    "https://i.imgur.com/cvqoK7l.jpg",
    "https://i.imgur.com/r1rm2ry.jpg",
    "https://i.imgur.com/8XO7t9a.jpg",
    "https://i.imgur.com/rTLpecf.jpg",
    "https://i.imgur.com/l9of06d.jpg",
    "https://i.imgur.com/GSegIuQ.jpg",
    "https://i.imgur.com/nSwNlyf.jpg",
    "https://i.imgur.com/iWhZIYl.jpg",
    "https://i.imgur.com/53x02Cj.jpg",
    "https://i.imgur.com/kqrgbGx.jpg",
    "https://i.imgur.com/p9rFiqZ.jpg",
    "https://i.imgur.com/Fr1Biar.jpg",
    "https://i.imgur.com/Y0pOrf4.jpg",
    "https://i.imgur.com/DLbggpI.jpg",
    "https://i.imgur.com/wQWKt8t.jpg",
    "https://i.imgur.com/bqm2ror.jpg",
    "https://i.imgur.com/YjdCC5T.jpg",
    "https://i.imgur.com/JIsiLyr.jpg",
    "https://i.imgur.com/smwHPTJ.jpg",
    "https://i.imgur.com/Rj7btya.jpg",
    "https://i.imgur.com/rvbxepM.jpg",
    "https://i.imgur.com/RNU9BjN.jpg",
    "https://i.imgur.com/sXWfHxx.jpg",
    "https://i.imgur.com/4hgUEny.jpg",
    "https://i.imgur.com/rQNFNIR.jpg",
    "https://i.imgur.com/NIkfoSt.jpg",
    "https://i.imgur.com/gXJCV7E.jpg",
    "https://i.imgur.com/i8pWglI.jpg",
    "https://i.imgur.com/pTgKmHa.jpg",
    "https://i.imgur.com/T5QtZ9I.jpg",
    "https://i.imgur.com/gIHmi7S.jpg",
    "https://i.imgur.com/U3MCtzx.jpg",
    "https://i.imgur.com/5hJCG2f.jpg",
    "https://i.imgur.com/OzBgd1W.jpg",
    "https://i.imgur.com/3TvSX1i.jpg",
    "https://i.imgur.com/b2MkoYM.jpg",
    "https://i.imgur.com/Dtru3fp.jpg",
    "https://i.imgur.com/vkqLf9v.jpg",
    "https://i.imgur.com/b1vBRTV.jpg",
    "https://i.imgur.com/eMv5vkT.jpg",
    "https://i.imgur.com/1kbChJv.jpg",
    "https://i.imgur.com/hQFq7aG.jpg",
    "https://i.imgur.com/bWbqyNE.jpg",
    "https://i.imgur.com/fXhu9Yc.jpg",
    "https://i.imgur.com/QutckMk.jpg",
    "https://i.imgur.com/VKrAV4e.jpg",
    "https://i.imgur.com/vzbezXa.jpg",
    "https://i.imgur.com/UTk4A6G.jpg",
    "https://i.imgur.com/SSS7cE4.jpg",
    "https://i.imgur.com/H2WQ3Rs.jpg",
    "https://i.imgur.com/VK8ibDW.jpg",
    "https://i.imgur.com/my9rWpH.jpg",
    "https://i.imgur.com/83UBvmx.jpg",
    "https://i.imgur.com/9J1txSW.jpg",
    "https://i.imgur.com/ZjYQem6.jpg",
    "https://i.imgur.com/tzqq3tg.jpg",
    "https://i.imgur.com/E8gxWdF.jpg",
    "https://i.imgur.com/kN1MpzR.jpg",
    "https://i.imgur.com/s8ql7VD.jpg",
    "https://i.imgur.com/BcjcGwf.jpg",
    "https://i.imgur.com/aFeqLQJ.jpg",
    "https://i.imgur.com/CaUoyOy.jpg",
    "https://i.imgur.com/w5dY397.png",
    "https://i.imgur.com/qouyaqF.png",
    "https://i.imgur.com/pi4zAhE.png",
    "https://i.imgur.com/Sz8gl1s.jpg",
    "https://i.imgur.com/mCcs2NN.jpg",
    "https://i.imgur.com/v3hTo6J.jpg",
    "https://i.imgur.com/57Th63e.jpg",
    "https://i.imgur.com/LpX93lR.jpg",
    "https://i.imgur.com/rNEUT4Z.jpg",
    "https://i.imgur.com/XnDOll0.jpg",
    "https://i.imgur.com/7neOAz7.jpg",
    "https://i.imgur.com/ARiLeyr.jpg",
    "https://i.imgur.com/UaolzDQ.jpg",
    "https://i.imgur.com/whQug6G.jpg",
    "https://i.imgur.com/GZ6WuYd.jpg",
    "https://i.imgur.com/eZrIUVn.jpg",
    "https://i.imgur.com/kMCASul.jpg",
    "https://i.imgur.com/xWyvOfG.jpg",
    "https://i.imgur.com/1PdrS8J.jpg",
    "https://i.imgur.com/FZhF1n7.jpg",
    "https://i.imgur.com/OK36OhR.jpg",
    "https://i.imgur.com/PvrMhRa.jpg",
    "https://i.imgur.com/WAGxTZr.jpg",
    "https://i.imgur.com/EXdzs7O.jpg",
    "https://i.imgur.com/uxHV6lt.jpg",
    "https://i.imgur.com/AyM8Dr9.jpg",
    "https://i.imgur.com/KYDbGQ8.jpg",
    "https://i.imgur.com/J1pVIzq.jpg",
    "https://i.imgur.com/VrvjWS9.jpg",
    "https://i.imgur.com/SCt9NUS.jpg",
    "https://i.imgur.com/hGUv0zE.jpg",
    "https://i.imgur.com/rdCIY2h.jpg",
    "https://i.imgur.com/pVEF4I6.jpg",
    "https://i.imgur.com/cm6q99h.jpg",
    "https://i.imgur.com/jVIThnw.jpg",
    "https://i.imgur.com/dng9fcA.jpg",
    "https://i.imgur.com/cjqGgBS.jpg",
    "https://i.imgur.com/XXaXqxD.jpg",
    "https://i.imgur.com/euxUpho.jpg",
    "https://i.imgur.com/9QySRv8.jpg",
    "https://i.imgur.com/JNa8XUg.jpg",
    "https://i.imgur.com/qYcpJr7.jpg",
    "https://i.imgur.com/2MObaOL.jpg",
    "https://i.imgur.com/Z8I8ppo.jpg",
    "https://i.imgur.com/gKCd4ko.jpg",
    "https://i.imgur.com/0CqXQjO.jpg",
    "https://i.imgur.com/Giuoo8H.jpg",
    "https://i.imgur.com/egKQ6Tw.jpg",
    "https://i.imgur.com/qdYU24C.jpg",
    "https://i.imgur.com/SUGJFWU.jpg",
    "https://i.imgur.com/nHS2Hqn.jpg",
    "https://i.imgur.com/iBkUCqD.jpg",
    "https://i.imgur.com/xW2EIYv.jpg",
    "https://i.imgur.com/KHMeOac.jpg",
    "https://i.imgur.com/PCx0r82.jpg",
    "https://i.imgur.com/CYDgDiT.jpg",
    "https://i.imgur.com/l6OnG4R.jpg",
    "https://i.imgur.com/E1JjyQb.jpg",
    "https://i.imgur.com/8YcibAv.jpg",
    "https://i.imgur.com/khT5P7q.jpg",
    "https://i.imgur.com/Ecpl5ig.jpg",
    "https://i.imgur.com/nFhXDSv.jpg",
    "https://i.imgur.com/jwliTrs.jpg",
    "https://i.imgur.com/IPcxQxr.jpg",
    "https://i.imgur.com/mC7Jwam.jpg",
    "https://i.imgur.com/fXCkoWO.jpg",
    "https://i.imgur.com/Q7PzkLS.jpg",
    "https://i.imgur.com/l6Yv7il.jpg",
    "https://i.imgur.com/sdDMwGz.jpg",
    "https://i.imgur.com/SjhcUYT.jpg",
    "https://i.imgur.com/jO2Ecs2.jpg",
    "https://i.imgur.com/rjYuiVx.jpg",
    "https://i.imgur.com/0jiYDHI.jpg",
    "https://i.imgur.com/CT1MDI3.jpg",
    "https://i.imgur.com/qxyIKQr.jpg",
    "https://i.imgur.com/uDQjHRP.jpg",
    "https://i.imgur.com/ol2Oj8R.jpg",
    "https://i.imgur.com/Wfjb2Ai.jpg",
    "https://i.imgur.com/74y3fAJ.jpg",
    "https://i.imgur.com/dDjh4Uw.jpg",
    "https://i.imgur.com/CjpjWxM.jpg",
    "https://i.imgur.com/NIC81ns.jpg",
    "https://i.imgur.com/0KkbJge.jpg",
    "https://i.imgur.com/xqBJ4tV.jpg",
    "https://i.imgur.com/1zHEb7K.jpg",
    "https://i.imgur.com/TOFZzI1.jpg",
    "https://i.imgur.com/1e11CSw.jpg",
    "https://i.imgur.com/IccBn2c.jpg",
    "https://i.imgur.com/XRZGGcJ.jpg",
    "https://i.imgur.com/PFtdlMw.jpg",
    "https://i.imgur.com/f3drZoc.jpg",
    "https://i.imgur.com/352upti.jpg",
    "https://i.imgur.com/c1uJml9.jpg",
    "https://i.imgur.com/Vi5s22D.jpg",
    "https://i.imgur.com/aQqsIEE.jpg",
    "https://i.imgur.com/irpCe7P.jpg",
    "https://i.imgur.com/Zx6Yjff.jpg",
    "https://i.imgur.com/LgKKZ4R.jpg",
    "https://i.imgur.com/FCGTCXZ.jpg",
    "https://i.imgur.com/f1u6YTD.png",
    "https://i.imgur.com/6O1vzmr.jpg",
    "https://i.imgur.com/L5H3zRz.png",
    "https://i.imgur.com/LFC8bNW.jpg",
    "https://i.imgur.com/zvEYbeN.jpg",
    "https://i.imgur.com/gACJQoI.jpg",
    "https://i.imgur.com/7iXAyWx.jpg",
    "https://i.imgur.com/xM3grxy.jpg",
    "https://i.imgur.com/IoWiIW3.jpg",
    "https://i.imgur.com/o9AjYD4.jpg",
    "https://i.imgur.com/8C4hJNm.png",
    "https://i.imgur.com/EzbwAlV.jpg",
    "https://i.imgur.com/579AXWF.jpg",
    "https://i.imgur.com/5JWh0g2.jpg",
    "https://i.imgur.com/2J0ZLVw.jpg",
    "https://i.imgur.com/gAX2K9U.jpg",
    "https://i.imgur.com/rf4BQTk.jpg",
    "https://i.imgur.com/JXeXDJY.jpg",
    "https://i.imgur.com/QbcSeQd.jpg",
    "https://i.imgur.com/xgy2bEF.jpg",
    "https://i.imgur.com/MpKbH1S.jpg",
    "https://i.imgur.com/b3B3TRg.jpg",
    "https://i.imgur.com/0SjdKRJ.jpg",
    "https://i.imgur.com/WxJ4Dty.jpg",
    "https://i.imgur.com/yhYvKdi.jpg",
    "https://i.imgur.com/07Cq8eX.jpg",
    "https://i.imgur.com/uT7p0IQ.jpg",
    "https://i.imgur.com/yjrxPh1.jpg",
    "https://i.imgur.com/CJTkcpu.jpg",
    "https://i.imgur.com/ngtHTXw.jpg",
    "https://i.imgur.com/iGoSGYS.jpg",
    "https://i.imgur.com/6wZtAFN.jpg",
    "https://i.imgur.com/fZ9nAIm.jpg",
    "https://i.imgur.com/S5f4IgT.jpg",
    "https://i.imgur.com/IBlQ7td.jpg",
    "https://i.imgur.com/BzZyyj6.jpg",
    "https://i.imgur.com/X8FBjTy.jpg",
    "https://i.imgur.com/MUBx7Fv.jpg",
    "https://i.imgur.com/hKquzgo.jpg",
    "https://i.imgur.com/GPSI7tl.jpg",
    "https://i.imgur.com/hXXe9uI.jpg",
    "https://i.imgur.com/varo8zI.jpg",
    "https://i.imgur.com/SJ2tSzt.jpg",
    "https://i.imgur.com/Zn61xQ3.jpg",
    "https://i.imgur.com/IH4Cc82.jpg",
    "https://i.imgur.com/7VuDuEX.jpg",
    "https://i.imgur.com/iO8e46Y.jpg",
    "https://i.imgur.com/d1yPdFW.jpg",
    "https://i.imgur.com/Ny2USkc.jpg",
    "https://i.imgur.com/X6OpdJn.jpg",
    "https://i.imgur.com/A8I2ZTy.jpg",
    "https://i.imgur.com/FHwGc6j.jpg",
    "https://i.imgur.com/3oxBfue.jpg",
    "https://i.imgur.com/s0cb0wy.jpg",
    "https://i.imgur.com/xJRBUyS.jpg",
    "https://i.imgur.com/pMrRebM.jpg",
    "https://i.imgur.com/eRagL8l.jpg",
    "https://i.imgur.com/jv7FQyz.jpg",
    "https://i.imgur.com/lk8eH5C.jpg",
    "https://i.imgur.com/pBVU4oI.jpg",
    "https://i.imgur.com/sgXgSyZ.jpg",
    "https://i.imgur.com/uriQw5p.jpg",
    "https://i.imgur.com/mHCGMvd.jpg",
    "https://i.imgur.com/Jswt4WI.jpg",
    "https://i.imgur.com/7FrFFmk.jpg",
    "https://i.imgur.com/mj54g94.jpg",
    "https://i.imgur.com/GbdRNHn.jpg",
    "https://i.imgur.com/IdBY0RC.jpg",
    "https://i.imgur.com/jt9g4qv.jpg",
    "https://i.imgur.com/cYLW6ND.jpg",
    "https://i.imgur.com/a6bG9OJ.jpg",
    "https://i.imgur.com/Vp4CrzA.jpg",
    "https://i.imgur.com/bJosWlx.jpg",
    "https://i.imgur.com/q04kkvk.jpg",
    "https://i.imgur.com/dDeGegy.jpg",
    "https://i.imgur.com/PsGH4iF.jpg",
    "https://i.imgur.com/XzNwtKs.png",
    "https://i.imgur.com/G76GnQs.jpg",
    "https://i.imgur.com/9Pop0jk.jpg",
    "https://i.imgur.com/EvPbdLv.jpg",
    "https://i.imgur.com/yMV4Euc.jpg",
    "https://i.imgur.com/EG519Cl.jpg",
    "https://i.imgur.com/H8bquFj.jpg",
    "https://i.imgur.com/8VlMtwn.jpg",
    "https://i.imgur.com/XcavaOU.jpg",
    "https://i.imgur.com/rIaXF4X.jpg",
    "https://i.imgur.com/POQtJbb.jpg",
    "https://i.imgur.com/AOJGdKS.jpg",
    "https://i.imgur.com/RBVnaaY.jpg",
    "https://i.imgur.com/8i848vt.jpg",
    "https://i.imgur.com/CMkZ0sG.jpg",
    "https://i.imgur.com/405HlDU.jpg",
    "https://i.imgur.com/yqfaXY6.jpg",
    "https://i.imgur.com/5rNqyY7.jpg",
    "https://i.imgur.com/RKkCq8P.jpg",
    "https://i.imgur.com/vhWaESf.jpg",
    "https://i.imgur.com/mvs9JHj.jpg",
    "https://i.imgur.com/Du7uY2o.jpg",
    "https://i.imgur.com/vsmmU9M.jpg",
    "https://i.imgur.com/h85RIBK.jpg",
    "https://i.imgur.com/yBXlOHY.jpg",
    "https://i.imgur.com/3NMCJZv.jpg",
    "https://i.imgur.com/1dz7k1S.jpg",
    "https://i.imgur.com/hZFrdFW.jpg",
    "https://i.imgur.com/8aeoeYN.jpg",
    "https://i.imgur.com/XFKDEIJ.jpg",
    "https://i.imgur.com/Gv3VTue.jpg",
    "https://i.imgur.com/NluTBYi.jpg",
    "https://i.imgur.com/9xIZshz.jpg",
    "https://i.imgur.com/sORiJ4l.jpg",
    "https://i.imgur.com/7HEjmnF.jpg",
    "https://i.imgur.com/kqwpjvM.jpg",
    "https://i.imgur.com/G4CWkdA.jpg",
    "https://i.imgur.com/zljM2wk.jpg",
    "https://i.imgur.com/MIoFqaW.jpg",
    "https://i.imgur.com/VTzw4ZG.jpg",
    "https://i.imgur.com/i9erTFD.jpg",
    "https://i.imgur.com/A1arIN6.jpg",
    "https://i.imgur.com/4csKEij.jpg",
    "https://i.imgur.com/4ytTvdj.jpg",
    "https://i.imgur.com/lMTwpnQ.jpg",
    "https://i.imgur.com/dvMzGCc.jpg",
    "https://i.imgur.com/UplQQ8U.jpg",
    "https://i.imgur.com/LSddlbB.jpg",
    "https://i.imgur.com/PUOkYZp.jpg",
    "https://i.imgur.com/KSgP3or.jpg",
    "https://i.imgur.com/pPZlMYE.jpg",
    "https://i.imgur.com/Q3pB3JT.jpg",
    "https://i.imgur.com/EMe85w7.jpg",
    "https://i.imgur.com/1dhFaiz.jpg",
    "https://i.imgur.com/tyG2tLv.jpg",
    "https://i.imgur.com/DqK8zjX.jpg",
    "https://i.imgur.com/iLBiiLo.jpg",
    "https://i.imgur.com/pegvicI.jpg",
    "https://i.imgur.com/ViJOBaQ.jpg",
    "https://i.imgur.com/N74QlWf.jpg",
    "https://i.imgur.com/17PCCM1.jpg",
    "https://i.imgur.com/PINdg09.jpg",
    "https://i.imgur.com/3j7ltKs.jpg",
    "https://i.imgur.com/bfoaURB.jpg",
    "https://i.imgur.com/FZbfA68.jpg",
    "https://i.imgur.com/YkTyXp0.jpg",
    "https://i.imgur.com/DqF8cRf.jpg",
    "https://i.imgur.com/lz7rlYb.jpg",
    "https://i.imgur.com/qafsgIF.jpg",
    "https://i.imgur.com/56XrZUq.jpg",
    "https://i.imgur.com/rCpKDgd.jpg",
    "https://i.imgur.com/HOsFONj.jpg",
    "https://i.imgur.com/edDPEvs.jpg",
    "https://i.imgur.com/wYuIGVH.png",
    "https://i.imgur.com/LSbd9Wj.jpg",
    "https://i.imgur.com/KwgVsYF.jpg",
    "https://i.imgur.com/Eujsxkf.jpg",
    "https://i.imgur.com/LVmj61N.jpg",
    "https://i.imgur.com/hfGo3OS.jpg",
    "https://i.imgur.com/BEMHZ2j.jpg",
    "https://i.imgur.com/1D8jSsK.jpg",
    "https://i.imgur.com/T7QW4Ih.jpg",
    "https://i.imgur.com/z1Mm4nQ.jpg",
    "https://i.imgur.com/ezxEDso.jpg",
    "https://i.imgur.com/8uMwsX8.jpg",
    "https://i.imgur.com/pkoItBN.jpg",
    "https://i.imgur.com/2sQWuQb.jpg",
    "https://i.imgur.com/A502SkB.jpg",
    "https://i.imgur.com/abXCscs.jpg",
    "https://i.imgur.com/1c1oc7r.jpg",
    "https://i.imgur.com/NDQskOe.jpg",
    "https://i.imgur.com/MlFrAcW.png",
    "https://i.imgur.com/CnNE9TU.jpg",
    "https://i.imgur.com/E4EJ8OO.jpg",
    "https://i.imgur.com/NPcKWaQ.jpg",
    "https://i.imgur.com/yyuaxE0.jpg",
    "https://i.imgur.com/zKa4tlb.jpg",
    "https://i.imgur.com/bNOvXDM.jpg",
    "https://i.imgur.com/GKMG3wx.jpg",
    "https://i.imgur.com/oV7RntX.jpg",
    "https://i.imgur.com/Q93S52s.jpg",
    "https://i.imgur.com/2k5BlPs.jpg",
    "https://i.imgur.com/nOaSeBy.jpg",
    "https://i.imgur.com/KKilV96.png",
    "https://i.imgur.com/rB65Ogl.jpg",
    "https://i.imgur.com/QBVOim0.jpg",
    "https://i.imgur.com/FPdNAfX.jpg",
    "https://i.imgur.com/PlWhg77.jpg",
    "https://i.imgur.com/wSoVoiq.jpg",
    "https://i.imgur.com/2lINUF6.png",
    "https://i.imgur.com/mFV54d5.jpg",
    "https://i.imgur.com/miVWDFs.jpg",
    "https://i.imgur.com/5AQo1EV.jpg",
    "https://i.imgur.com/cIbfUOw.jpg",
    "https://i.imgur.com/jUH2dFn.jpg"
  ]

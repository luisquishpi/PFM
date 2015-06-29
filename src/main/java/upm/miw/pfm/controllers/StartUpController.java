package upm.miw.pfm.controllers;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import javax.ejb.Singleton;
import javax.ejb.Startup;

import org.apache.logging.log4j.LogManager;

import upm.miw.pfm.utils.HibernateUtil;

@Singleton
@Startup
public class StartUpController {

    private final static Class<StartUpController> clazz = StartUpController.class;

    @PostConstruct
    private void startup() {
        LogManager.getLogger(clazz).info(
                "******************Inicializando la aplicacion**************");
        LogManager.getLogger(clazz).info(
                "SessionFactory inicializado? " + HibernateUtil.isInitialized());
    }

    @PreDestroy
    private void shutdown() {
        LogManager.getLogger(clazz).info(
                "******************Finalizando la aplicacion**************");
    }

}